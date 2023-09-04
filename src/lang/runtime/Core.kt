package lang.runtime

import lang.syntax.*
import utils.Logger

sealed class Core {
    class T21Basic : Core() {
        var acc: Num = Num(0)
        var bak: Num = Num(0)
        var last: Direction? = null // last read
        var mode: Mode = Mode.Idle
        var idlePercent: Int = 0

        fun isInstructionHighlightDimmed() = mode != Mode.Run
        fun isOnBreakpoint(): Boolean = (currentLine()?.hasBreakpoint ?: false) && mode == Mode.Run // ne pas s'arrêter sur les breakpoints quand une instruction attend en lecture ou écriture

        private var cachedParseResult: utils.Result<SyntaxList, List<Parser.Error>>? = null // parser tout à chaque cycle, c'était un peu lent ^^'
        private var _text = ""
        var text: String
            get() = _text
            set(value) {
                cachedParseResult = null; _text = value
            }

        private fun parseResult() = cachedParseResult ?: run { cachedParseResult = Parser.parse(text); cachedParseResult }

        // TODO: c'est tout buggé. gérer bien les lignes sans instructions mais avec label. mettre ça dans SyntaxList
        var instructionIndex = 0
        private fun lines(): SyntaxList? = (parseResult() as? utils.Result.Success)?.item
        private fun instructions() = (parseResult() as? utils.Result.Success)?.item?.instructions
        private fun currentInstruction() = instructions().orEmpty().getOrNull(instructionIndex)
        private fun currentLine() = lines()?.lines.orEmpty().getOrNull(instructionIndex)

        fun canReadFrom(direction: Direction): Boolean {
            val reads = (instructions() ?: return true).map { it?.source }.filterNotNull()
            return reads.contains(direction) || reads.contains(Port.ANY) || reads.contains(Port.LAST)
        }
        fun canWriteTo(direction: Direction): Boolean {
            val writes = (instructions() ?: return true).filterIsInstance<Instruction.MOV>().map { it.destination }
            return writes.contains(direction) ||
                    writes.contains(Port.ANY) ||
                    writes.contains(Port.LAST)
        }

        override fun reset() {
            acc = Num(0)
            bak = Num(0)
            last = null
            mode = Mode.Idle
            idlePercent = 0
            instructionIndex = 0
        }


        private fun instructionIndexFromLabel(label: Label): Int {
            return lines()!!.lines.filter { it.instruction != null }.indexOfFirst { it.label == label }
        }

        override fun execute(stepExecution: StepExecution) {
            val instructions = instructions()
            val instruction = currentInstruction()
            if (instructions == null || instruction == null) {
                mode = Mode.Idle
                return
            }

            val result = executeInstruction(stepExecution, instruction)
            applyResult(result, instructions)
        }

        private fun applyResult(result: InstructionResult, instructions: List<Instruction?>) {
            mode = result.mode
            instructionIndex = when (result.jump) {
                is Jump.ToLabel -> instructionIndexFromLabel(result.jump.label)
                is Jump.ToOffset -> (instructionIndex + result.jump.offset) % instructions.count()
            }
        }

        fun executeMovEnd(direction: Direction?) {
            val instructions = instructions()
            val instruction = currentInstruction()
            if (instructions == null || instruction == null) {
                mode = Mode.Idle
                return
            }

            if (instruction !is Instruction.MOV || mode != Mode.ImplementationError) {
                return
            }
            val result = executeMovEnd2(instruction, direction)
            applyResult(result, instructions)
        }

        private fun executeMovEnd2(instruction: Instruction.MOV, directionWrittenTo: Direction?): InstructionResult {
            if (directionWrittenTo == null) {
                return InstructionResult.writing
            }
            if (instruction.destination == Port.ANY) {
                last = directionWrittenTo
            }
            return InstructionResult.advance
        }

        private fun executeInstruction(stepExecution: StepExecution, instruction: Instruction): InstructionResult {
            return when (instruction) {
                is Instruction.NOP -> InstructionResult.advance
                is Instruction.SWP -> InstructionResult.advance.also { val temp = acc; acc = bak; bak = temp }
                is Instruction.SAV -> InstructionResult.advance.also { bak = acc }
                is Instruction.NEG -> InstructionResult.advance.also { acc = -acc }
                is Instruction.ADD -> stepExecution.readOrWait(instruction.source, this) { acc += it; InstructionResult.advance }
                is Instruction.SUB -> stepExecution.readOrWait(instruction.source, this) { acc -= it; InstructionResult.advance }
                is Instruction.MOV -> mov(stepExecution, instruction.source, instruction.destination)
                is Instruction.JMP -> InstructionResult.jump(instruction.label)
                is Instruction.JEZ -> if (acc.number == 0) InstructionResult.jump(instruction.label) else InstructionResult.advance
                is Instruction.JNZ -> if (acc.number != 0) InstructionResult.jump(instruction.label) else InstructionResult.advance
                is Instruction.JGZ -> if (acc.number > 0) InstructionResult.jump(instruction.label) else InstructionResult.advance
                is Instruction.JLZ -> if (acc.number < 0) InstructionResult.jump(instruction.label) else InstructionResult.advance
                is Instruction.JRO -> stepExecution.readOrWait(instruction.source, this) { InstructionResult.relativeJump(it.number) }
            }
        }

        private fun mov(stepExecution: StepExecution, source: Source, destination: Destination): InstructionResult {
            if (mode != Mode.Write) {
                // (Maybe wait and) read the source and write it into the pipes.
                return stepExecution.readOrWait(source, this) { num ->
                    when (destination) {
                        is NIL -> InstructionResult.advance
                        is ACC -> InstructionResult.advance.also { acc = num } // is ACC as I MOV lol
                        is Port -> {
                            val directions = when (destination) {
                                is Direction -> listOf(destination)
                                is Port.LAST -> listOfNotNull(last)
                                is Port.ANY -> Direction.all
                            }
                            if (directions.isEmpty()) {
                                // An uninitialized LAST port behaves as NIL for reading and writing.
                                InstructionResult.advance
                            } else {
                                // Takes at least 2 cycles when writing to a port.
                                for (direction in directions) {
                                    stepExecution.delayedWriteToPipe(this, direction, num)
                                }
                                InstructionResult.writing // The write is to be continued on the next cycle. 「つづく」
                            }
                        }
                        else -> throw NoWhenBranchMatchedException(destination.toString())
                    }
                }
            } else {
                // This is not this MOV's first cycle, because we are writing to one or more ports.
                return InstructionResult.unfinishedInPhaseOne // haha c'est trop dégeu
            }
        }

        sealed class Jump {
            data class ToOffset(val offset: Int) : Jump()
            data class ToLabel(val label: Label) : Jump()
        }

        class InstructionResult private constructor(val mode: Mode, val jump: Jump) {
            companion object {
                val advance = relativeJump(1)
                val writing = InstructionResult(Mode.Write, Jump.ToOffset(0))
                val reading = InstructionResult(Mode.Read, Jump.ToOffset(0))
                fun relativeJump(offset: Int) = InstructionResult(Mode.Run, Jump.ToOffset(offset))
                fun jump(label: Label) = InstructionResult(Mode.Run, Jump.ToLabel(label))
                val unfinishedInPhaseOne = InstructionResult(Mode.ImplementationError, Jump.ToOffset(0))
            }
        }
    }

    object Damaged : Core()
    class T30Stack : Core()
    class T20 : Core()
    class T31 : Core()
    class Input(val numbers: List<Constant>) : Core()
    class Output(val expectedNumbers: List<Constant>) : Core()
    class PuzzleImage : ImageOutput(rowCount = 18, colCount = 30)
    class SandboxImage : ImageOutput(rowCount = 22, colCount = 36)
    abstract class ImageOutput(val rowCount: Int, val colCount: Int) : Core() {
        // The following is from this helpful spec (CC-by-sa) : https://alandesmet.github.io/TIS-100-Hackers-Guide/display.html
        // An output stream that is interpreted as drawing commands.
        // The display is indexed from 0, with 0,0 being the upper left corner and 29,17 being the bottom right for a puzzle display.
        // Pixels are not square; they are roughly 9 wide by 13 tall.
        // The display is capable of displaying 5 different colors:
        // Value	Color
        // 0	 	Black	    #000000
        // 1	 	Dark Grey	#464646
        // 2	 	Light Grey	#9c9c9c
        // 3	 	White	    #fafafa
        // 4	 	Red	        #c00b0b
        // Output from the TIS-100 assembly must consist of:
        //      An X coordinate
        //      A Y coordinate
        //      Zero or more pixel colors, 0-4
        //      Any negative value as a terminator
        // The pixel colors will be drawn starting at the X,Y coordinate and moving right.
        // If there are enough entries to exceed the maximum X value (29 or 35), the extra values are discarded. (This behavior is not guaranteed)
        // If the X or Y coordinates are larger than the maximum X and Y coordinates of the display, the following pixel colors are discarded.
        // Pixels are drawn as soon as the respective color arrives in the output stream. They do not wait until the terminator arrives.
        // Colors with values in excess of 4 are treated as "0". Negative color values are not possible, as that indicates the terminator.
        // A negative X or Y coordinate is treated as a terminator; nothing is drawn and the next digit is expected to be an X coordinate.
    }

    open fun execute(stepExecution: StepExecution) {
        Logger.log("TODO: implement execute() for ${this::class.simpleName ?: "???"}")
    }
    open fun reset() {
        Logger.log("TODO: implement reset() for ${this::class.simpleName ?: "???"}")
    }
}