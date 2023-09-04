package lang.runtime

import lang.syntax.*
import utils.Logger

class StepExecution(private val runtimeState: RuntimeState) {
    private val directionDataWentTo = mutableMapOf<Core, Direction>()
    private val delayedWrites: MutableMap<PipeKey, Num?> = mutableMapOf()

    fun delayedWriteToPipe(writerCore: Core, direction: Direction, num: Num) {
        val corePosition = runtimeState.coreKey(writerCore)
        val pipeKey = PipeKey.writingTo(corePosition, direction)
        delayedWrites[pipeKey] = num
    }

    // Read priorities = LEFT>RIGHT>UP>DOWN. Write priorities = UP>LEFT>RIGHT>DOWN.
    // Wait, what does it mean when these two rules conflict? Well I experimented a little.
    // Processing only the READs (using LEFT>RIGHT>UP>DOWN) from top to bottom then left to right
    // produces the observed WRITE priorities, and is consistent with the observed behavior.
    // So I guess I'll do that. After all, exhaustive testing sounds exhausting.

    fun execute() {

        // phase 1: reading MOVs and all non-MOV instructions.
        for ((corePosition, core) in runtimeState.cores.entries.sortedWith(compareBy({ it.key.y }, { it.key.x }))) {
            var ok = false
            try {
                core.execute(this)
                ok = true
            } finally {
                if (!ok)
                    Logger.log("execution of core at $corePosition failed; other cores not executed")
            }
        }

        // phase 2: writing MOVs.
        for (core in runtimeState.cores.values.filterIsInstance<Core.T21Basic>()) {
            core.executeMovEnd(directionDataWentTo[core])
        }

        // phase 3: write the data from the reading MOVs of phase 1 that could read something.
        runtimeState.pipes.putAll(delayedWrites)

        if (runtimeState.cores.values.filterIsInstance<Core.T21Basic>().any { it.mode == Mode.ImplementationError }) {
            throw AssertionError("Mode.ImplementationError")
        }
    }

    fun readOrWait(source: Source, readerCore: Core.T21Basic, action: (Num) -> Core.T21Basic.InstructionResult): Core.T21Basic.InstructionResult {
        return when (source) {
            is ACC -> action(readerCore.acc)
            is Constant -> action(Num(source.number))
            is Port -> {
                val directions = when (source) {
                    is Direction -> listOf(source)
                    is Port.LAST -> listOfNotNull(readerCore.last)
                    is Port.ANY -> Direction.all
                }
                if (directions.isEmpty()) {
                    // An uninitialized LAST port behaves as NIL for reading and writing.
                    action(Num(0))
                } else {
                    val data = tryReadFromPipes(readerCore, directions)
                    if (data == null)
                        Core.T21Basic.InstructionResult.reading
                    else {
                        val (direction, availableData) = data
                        if (source == Port.ANY) {
                            readerCore.last = direction
                        }
                        action(availableData)
                    }
                }
            }
            else -> throw NoWhenBranchMatchedException(source.toString())
        }
    }

    private fun tryReadFromPipes(readerCore: Core, directions: List<Direction>): Pair<Direction, Num>? {
        val corePosition = runtimeState.coreKey(readerCore)
        for (direction in directions) {
            val availableData = runtimeState.pipes[PipeKey.readingFrom(corePosition, direction)]
            if (availableData != null) {
                val senderCore = corePosition.neighbor(direction)
                // Clean up the value that we read from all pipes now, so that other cores can't read it. (when reading from a MOV to ANY)
                for (pipeKey in Direction.all.map { PipeKey.writingTo(senderCore, it) }) {
                    runtimeState.pipes[pipeKey] = null
                }
                runtimeState.cores[corePosition.neighbor(direction)]?.let { directionDataWentTo.put(it, direction.opposite()) }
                return Pair(direction, availableData)
            }
        }
        return null
    }
}