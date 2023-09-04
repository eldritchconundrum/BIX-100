package ui

import lang.runtime.Core
import lang.runtime.CorePosition
import lang.runtime.PipeKey
import lang.runtime.RuntimeState
import lang.syntax.Direction
import utils.Logger
import lang.syntax.Parser
import org.w3c.dom.HTMLElement
import org.w3c.dom.events.Event
import org.w3c.dom.events.KeyboardEvent
import utils.Result

class UI(val dom: DOM) {

    private inline fun <T> topLevelCatchAll(errorContext: String, f: () -> T) {
        try {
            f()
        } catch (ex: Throwable) { // This should be the sole use of 'catch' in the whole codebase. This is how exceptions are to be used.
            val message = "In $errorContext: $ex"
            console.error(message)
            Logger.log(message)
        }
    }

    private fun addEventHandler(target: HTMLElement, type: String, handler: (Event) -> kotlin.Unit) {
        val elementDesc = "id=${target.id} class=${target.className}"
        target.addEventListener(type, { event: Event ->
            topLevelCatchAll("'$type' handler for element $elementDesc") {
                handler(event)
            }
        })
    }

    val cores: Map<CorePosition, ui.Core> = dom.coreGrid.cores
    val runtimeState = RuntimeState(cores.keys.associateBy({ it }, { Core.T21Basic() as Core }))

    init {
        for ((position, core) in cores) {
            addEventHandler(core.codeTextArea, DOMConstants.Event_KeyUp) { keyboardInput(it as KeyboardEvent, position, core) }
        }
        addEventHandler(dom.stopButton, DOMConstants.Event_OnClick) { Logger.log("reset"); reset() }
        addEventHandler(dom.stepButton, DOMConstants.Event_OnClick) { Logger.log("step"); step() }
        addEventHandler(dom.playButton, DOMConstants.Event_OnClick) { Logger.log("play"); play() }
        addEventHandler(dom.fastButton, DOMConstants.Event_OnClick) { Logger.log("fast"); fast() }
        addEventHandler(dom.veryFastButton, DOMConstants.Event_OnClick) { Logger.log("very fast"); veryFast() }

        refreshModelFromUI()
        refreshUIFromModel()
    }


    private fun keyboardInput(e: KeyboardEvent, position: CorePosition, core: ui.Core) {
        if (e.ctrlKey) { // Ctrl+Arrow moves to a neighboring core
            when (e.keyCode) {
                DOMConstants.KeyCode_Up -> cores[position.up()]?.codeTextArea?.focus()
                DOMConstants.KeyCode_Down -> cores[position.down()]?.codeTextArea?.focus()
                DOMConstants.KeyCode_Left -> cores[position.left()]?.codeTextArea?.focus()
                DOMConstants.KeyCode_Right -> cores[position.right()]?.codeTextArea?.focus()
                else -> Logger.log(e.keyCode.toString())
            }
        }
        compile(core)
        updateInstructionCounts()
    }
    private fun compile(core: ui.Core) {
        val sourceCode = core.codeTextArea.value
        val result = Parser.parse(sourceCode)
        Logger.log("---")
        Logger.log(sourceCode)
        when (result) {
            is Result.Success -> {
                Logger.log("ok:")
                Logger.log(result.item.toString())
            }
            is Result.Failure -> {
                Logger.log("error:")
                for (error in result.error) {
                    Logger.log(error.toString())
                }
            }
        }
    }
    private fun updateInstructionCounts() {
        val instructionCounts = cores.values.map { core ->
            val result = Parser.parse(core.sourceCode)
            when (result) {
                is Result.Success -> result.item.instructions.count()
                else -> core.sourceCode.lines().count()
            }
        }
        dom.instructionCountDiv.textContent = "${instructionCounts.joinToString(" + ")} = ${instructionCounts.sum()} instructions"
    }


    private fun reset() {
        stopAutorun()
        runtimeState.stop()
        refreshUIFromModel()
    }
    private fun step() {
        stopAutorun()
        runSteps(stepCount = 1)
    }
    private fun play() { startAutorun(stepCount = 1, millisecondDelay = 40) }
    private fun fast() { startAutorun(stepCount = 100, millisecondDelay = 16) }
    private fun veryFast() { startAutorun(stepCount = 1000, millisecondDelay = 0) }

    private var intervalId: Int? = null
    private fun startAutorun(stepCount: Int, millisecondDelay: Int) {
        stopAutorun()
        intervalId = kotlin.browser.window.setInterval({ runSteps(stepCount) }, millisecondDelay)
    }
    private fun stopAutorun() {
        intervalId?.let { kotlin.browser.window.clearInterval(it) }
    }

    private fun runSteps(stepCount: Int) {
        refreshModelFromUI()
        for (i in IntRange(1, stepCount)) {
            runtimeState.step()
            if (runtimeState.isOnBreakpoint()) {
                stopAutorun()
                Logger.log("breakpoint reached!")
                break
            }
        }
        refreshUIFromModel()
    }

    private fun refreshModelFromUI() {
        for ((corePosition, uiCore) in cores) {
            val runtimeCore = runtimeState.cores[corePosition]!!
            if (runtimeCore is Core.T21Basic) {
                runtimeCore.text = uiCore.sourceCode
            }
        }
    }
    private fun refreshUIFromModel() {
        for ((corePosition, uiCore) in cores) {
            val runtimeCore = runtimeState.cores[corePosition]!!
            if (runtimeCore is Core.T21Basic) {
                // content of cores
                uiCore.dataBind(runtimeCore)
            }

            // pipes
            fun updatePipe(corePosition: CorePosition, direction: Direction) {
                val num = runtimeState.pipes[PipeKey.writingTo(corePosition, direction)]
                val arrowVisible = runtimeState.isArrowVisible(corePosition, direction)
                dom.coreGrid.setPipeStatus(corePosition, direction, arrowVisible, num)
            }
            for (direction in Direction.all) {
                updatePipe(corePosition, direction)
                updatePipe(corePosition.neighbor(direction), direction.opposite())
            }
        }

        // cycle count
        val currentCycle = runtimeState.currentCycle
        dom.currentCycleDiv.textContent = if (currentCycle == null) "" else "CYCLE: $currentCycle"
    }
}
