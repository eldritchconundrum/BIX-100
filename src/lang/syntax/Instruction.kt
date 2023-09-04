package lang.syntax

sealed class Instruction {

    // helpful spec: https://alandesmet.github.io/TIS-100-Hackers-Guide/assembly.html

    object NOP : Instruction()
    object SWP : Instruction()
    object SAV : Instruction()
    object NEG : Instruction()
    data class ADD(override val source: Source) : Instruction()
    data class SUB(override val source: Source) : Instruction()
    data class MOV(override val source: Source, val destination: Destination) : Instruction()
    data class JMP(val label: Label) : Instruction()
    data class JEZ(val label: Label) : Instruction()
    data class JNZ(val label: Label) : Instruction()
    data class JGZ(val label: Label) : Instruction()
    data class JLZ(val label: Label) : Instruction()
    data class JRO(override val source: Source) : Instruction()

    open val source: Source? = null

    val name = when (this) {
        is NOP -> "NOP"
        is SWP -> "SWP"
        is SAV -> "SAV"
        is NEG -> "NEG"
        is ADD -> "ADD $source"
        is SUB -> "SUB $source"
        is MOV -> "MOV $source $destination"
        is JMP -> "JMP $label"
        is JEZ -> "JEZ $label"
        is JNZ -> "JNZ $label"
        is JGZ -> "JGZ $label"
        is JLZ -> "JLZ $label"
        is JRO -> "JRO $source"
    }

    override fun toString(): String = name

    companion object {
        fun createNullary(opcode: Opcode) = when (opcode) {
            Opcode.NOP -> Instruction.NOP
            Opcode.SWP -> Instruction.SWP
            Opcode.SAV -> Instruction.SAV
            Opcode.NEG -> Instruction.NEG
            else -> throw NoWhenBranchMatchedException(opcode.toString())
        }
        fun createUnary(opcode: Opcode, source: Source) = when (opcode) {
            Opcode.ADD -> Instruction.ADD(source)
            Opcode.SUB -> Instruction.SUB(source)
            Opcode.JRO -> Instruction.JRO(source)
            else -> throw NoWhenBranchMatchedException(opcode.toString())
        }
        fun createJump(opcode: Opcode, label: Label) = when (opcode) {
            Opcode.JMP -> Instruction.JMP(label)
            Opcode.JEZ -> Instruction.JEZ(label)
            Opcode.JNZ -> Instruction.JNZ(label)
            Opcode.JGZ -> Instruction.JGZ(label)
            Opcode.JLZ -> Instruction.JLZ(label)
            else -> throw NoWhenBranchMatchedException(opcode.toString())
        }
        fun createMov(source: Source, destination: Destination) = MOV(source, destination)
    }
}

