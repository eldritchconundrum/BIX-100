package lang.runtime

import lang.syntax.*

class RuntimeState(val cores: Map<CorePosition, Core>) {

    fun isOnBreakpoint() = cores.values.filterIsInstance<Core.T21Basic>().any { it.isOnBreakpoint() }

    fun isExecuting() = currentCycle != null
    var currentCycle: Int? = null
        private set

    fun stop() {
        currentCycle = null
        for (core in cores.values)
            core.reset()
        pipes.clear()
    }

    fun step() {
        currentCycle = (currentCycle ?: -1) + 1
        if (currentCycle == 0)
            return

        StepExecution(this).execute()
    }

    val pipes: MutableMap<PipeKey, Num?> = mutableMapOf()

    fun coreKey(core: Core): CorePosition = cores.toList().single { it.second == core }.first

    fun isArrowVisible(corePosition: CorePosition, direction: Direction): Boolean {
        val sourceCore = cores[corePosition]
        val destinationCore = cores[corePosition.neighbor(direction)]
        val sourceCanSend = sourceCore !is Core.T21Basic || sourceCore.canWriteTo(direction)
        val destinationCanRead = destinationCore !is Core.T21Basic || destinationCore.canReadFrom(direction.opposite())
        return sourceCore != null && destinationCore != null && sourceCanSend && destinationCanRead
    }
}
