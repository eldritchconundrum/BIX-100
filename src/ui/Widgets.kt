package ui

import lang.runtime.*
import lang.runtime.Core
import lang.syntax.Direction
import org.w3c.dom.*

abstract class Widget(open val dom: DOM, open val identifier: String) {
    abstract val rootHtmlElement: HTMLElement
}

class CoreGrid(override val dom: DOM, override val identifier: String, val rowCount: Int, val colCount: Int) : Widget(dom, identifier) {
    override val rootHtmlElement: HTMLElement get() = table
    val table: HTMLTableElement
    val cores: Map<CorePosition, ui.Core>
    val pipeWidgets: Map<PipeKey, Widget>

    init {
        val pipes = mutableMapOf<PipeKey, Widget>()
        val mutableCoreMap = mutableMapOf<CorePosition, ui.Core>()
        val coreRows = 0.until(rowCount * 2 + 1).map { y ->
            0.until(colCount * 2 + 1).map { x ->
                when (Pair(x % 2, y % 2)) {
                    Pair(0, 0) -> dom.div()
                    Pair(1, 0) -> {
                        val w = VertiPipe(dom, "vertiPipe_${x}_$y")
                        val cUp = CorePosition((x - 1) / 2, (y - 2) / 2)
                        val cDown = CorePosition((x - 1) / 2, y / 2)
                        pipes.put(PipeKey.fromTo(cUp, cDown), w)
                        pipes.put(PipeKey.fromTo(cDown, cUp), w)
                        w.rootHtmlElement
                    }
                    Pair(0, 1) -> {
                        val w = HorizPipe(dom, "horizPipe_${x}_$y")
                        val cLeft = CorePosition((x - 2) / 2, (y - 1) / 2)
                        val cRight = CorePosition(x / 2, (y - 1) / 2)
                        pipes.put(PipeKey.fromTo(cLeft, cRight), w)
                        pipes.put(PipeKey.fromTo(cRight, cLeft), w)
                        w.rootHtmlElement
                    }
                    Pair(1, 1) -> {
                        val pos = CorePosition((x - 1) / 2, (y - 1) / 2)
                        val core = Core(dom, "core_${pos.x}_${pos.y}")
                        mutableCoreMap[pos] = core
                        core.rootHtmlElement
                    }
                    else -> throw NoWhenBranchMatchedException()
                }
            }
        }
        cores = mutableCoreMap.toMap()
        pipeWidgets = pipes.toMap()
        table = dom.newTable("testTable", coreRows) { td, htmlElement, _ -> td.appendChild(htmlElement) }
    }

    fun setPipeStatus(corePosition: CorePosition, direction: Direction, arrowVisible: Boolean, num: Num?) {
        val pipeKey = PipeKey.writingTo(corePosition, direction)
        val pipeWidget = pipeWidgets[pipeKey]
        when {
            pipeWidget is VertiPipe && direction == Direction.UP -> { pipeWidget.downToUp = num; pipeWidget.upArrow.visible = arrowVisible }
            pipeWidget is VertiPipe && direction == Direction.DOWN -> { pipeWidget.upToDown = num; pipeWidget.downArrow.visible = arrowVisible }
            pipeWidget is HorizPipe && direction == Direction.RIGHT -> { pipeWidget.leftToRight = num; pipeWidget.rightArrow.visible = arrowVisible }
            pipeWidget is HorizPipe && direction == Direction.LEFT -> {pipeWidget.rightToLeft = num; pipeWidget.leftArrow.visible = arrowVisible }
            else -> utils.Logger.log("setPipeStatus failed: $corePosition $direction $arrowVisible $num")
        }
    }
}

class FancyUnicode {
    companion object {
//        val upArrowFull = "⬆"
//        val downArrowFull = "⬇"
//        val leftArrowFull = "⬅"
//        val rightArrowFull = "\u2B95" // and not "➡", https://stackoverflow.com/questions/4686518/cant-find-a-unicode-right-arrow  I don't know if I'm laughing or crying

        val upArrowFull = "↑"
        val downArrowFull = "↓"
        val leftArrowFull = "←"
        val rightArrowFull = "→"

        val upArrowEmpty = "⇑"
        val downArrowEmpty = "⇓"
        val leftArrowEmpty = "⇐"
        val rightArrowEmpty = "⇒"

        val upArrow = upArrowEmpty
        val downArrow = downArrowEmpty
        val leftArrow = leftArrowEmpty
        val rightArrow = rightArrowEmpty
    }
}

class HorizPipe(override val dom: DOM, override val identifier: String) : Widget(dom, identifier) {
    override val rootHtmlElement: HTMLElement get() = div
    val div: HTMLDivElement = dom.newElement("div", "${identifier}_div", null, listOf("pipeDiv"))
    val leftToRightDiv: HTMLDivElement = dom.newElement("div", "${identifier}_ltr_div", null, listOf("pipeValue"))
    val rightToLeftDiv: HTMLDivElement = dom.newElement("div", "${identifier}_rtl_div", null, listOf("pipeValue"))
    val rightArrow = ArrowSpanOrDiv(dom, "${identifier}_right_arrow_div", text = FancyUnicode.rightArrow, isSpan = false, classes = listOf("pipeArrow", "pipeArrowHoriz"))
    val leftArrow = ArrowSpanOrDiv(dom, "${identifier}_left_arrow_div", text = FancyUnicode.leftArrow, isSpan = false, classes = listOf("pipeArrow", "pipeArrowHoriz"))

    var leftToRight: Num? = Num(0)
        set(value) { leftToRightDiv.textContent = value?.toString() ?: "" }
    var rightToLeft: Num? = Num(0)
        set(value) { rightToLeftDiv.textContent = value?.toString() ?: "" }

    init {
        listOf(leftToRightDiv, rightArrow.rootHtmlElement, leftArrow.rootHtmlElement, rightToLeftDiv).forEach { div.appendChild(it) }
    }
}

class VertiPipe(override val dom: DOM, override val identifier: String) : Widget(dom, identifier) {
    override val rootHtmlElement: HTMLElement get() = div
    val div: HTMLDivElement = dom.newElement("div", "${identifier}_div", null, listOf("pipeDiv"))
    val downToUpSpan: HTMLSpanElement = dom.newElement("span", "${identifier}_ltr_div", null, listOf("pipeValue"))
    val upToDownSpan: HTMLSpanElement = dom.newElement("span", "${identifier}_rtl_div", null, listOf("pipeValue"))
    val upArrow = ArrowSpanOrDiv(dom, "${identifier}_up_arrow_div", text = FancyUnicode.upArrow, isSpan = true, classes = listOf("pipeArrow", "pipeArrowVerti"))
    val downArrow = ArrowSpanOrDiv(dom, "${identifier}_down_arrow_div", text = FancyUnicode.downArrow, isSpan = true, classes = listOf("pipeArrow", "pipeArrowVerti"))
    var downToUp: Num? = Num(0)
        set(value) { downToUpSpan.textContent = value?.toString() ?: "" }
    var upToDown: Num? = Num(0)
        set(value) { upToDownSpan.textContent = value?.toString() ?: "" }

    init {
        listOf(downToUpSpan, upArrow.rootHtmlElement, downArrow.rootHtmlElement, upToDownSpan).forEach { div.appendChild(it) }
    }
}

class ArrowSpanOrDiv(override val dom: DOM, override val identifier: String,
                     val text: String, val isSpan: Boolean, val classes: List<String>) : Widget(dom, identifier) {
    override val rootHtmlElement: HTMLElement = if (isSpan)
        dom.newElement<HTMLSpanElement>("span", identifier, text, classes)
    else
        dom.newElement<HTMLDivElement>("div", identifier, text, classes)

    var visible = true
        set(value) { rootHtmlElement.style.visibility = if (value) "visible" else "hidden" }
}

class Core(override val dom: DOM, override val identifier: String) : Widget(dom, identifier) {
    override val rootHtmlElement: HTMLElement get() = table
    val table: HTMLTableElement
    val codeTextArea: HTMLTextAreaElement
    val accDiv: HTMLDivElement
    val bakDiv: HTMLDivElement
    val lastDiv: HTMLDivElement
    val modeDiv: HTMLDivElement
    val idleDiv: HTMLDivElement
    init {
        // goal:
        //  tr
        //    td rowspan="5"
        //    td
        //  tr
        //    td
        //  tr
        //    td
        //  tr
        //    td
        //  tr
        //    td

        // first, create the TRs
        table = dom.newElement<HTMLTableElement>("table", "${identifier}_table", null, listOf("coreTable"))
        fun makeTr(trId: String) = dom.newElement<HTMLTableRowElement>("tr", "${identifier}__tr__$trId", null, listOf("tr$trId"))
        val trAcc= makeTr("acc")
        val trBak= makeTr("bak")
        val trLast= makeTr("last")
        val trMode= makeTr("mode")
        val trIdle= makeTr("idle")

        // append source code TD first (left) spanning 5 rows
        val trList = listOf(trAcc, trBak, trLast, trMode, trIdle)
        val tdSourceCode = dom.newElement<HTMLTableCellElement>("td", "${identifier}__tr__tdSourceCode")
        tdSourceCode.rowSpan = trList.count()
        trList.first().appendChild(tdSourceCode)

        // then append the TDs to the right
        fun addTdAndGetValueDiv(tr: HTMLTableRowElement, descText: String, valueText: String): HTMLDivElement {
            val classes = if (tr != trList.last()) listOf("coreRightTd", "coreRightTdExceptTheBottomOne") else listOf("coreRightTd")
            fun makeTd(tdId: String) = dom.newElement<HTMLTableCellElement>("td", "${tr.id}__td__$tdId", null, classes)
            val td = makeTd("td")
            td.appendChild(dom.newElement("div", "_", descText, listOf("descRightCoreTd")))
            val valueDiv = dom.newElement<HTMLDivElement>("div", "_", valueText, listOf("valueRightCoreTd"))
            td.appendChild(valueDiv)
            tr.appendChild(td)
            table.appendChild(tr)
            return valueDiv
        }
        accDiv = addTdAndGetValueDiv(trAcc, "ACC", "0")
        bakDiv = addTdAndGetValueDiv(trBak, "BAK", "(0)")
        lastDiv = addTdAndGetValueDiv(trLast, "LAST", "N/A")
        modeDiv = addTdAndGetValueDiv(trMode, "MODE", "IDLE")
        idleDiv = addTdAndGetValueDiv(trIdle, "IDLE", "0%")

        codeTextArea = dom.newElement(DOMConstants.Tag_TextArea, "${identifier}_codeTextArea", null, listOf("codeTextArea"))
        tdSourceCode.appendChild(codeTextArea)
    }

    var sourceCode: String
        get() = codeTextArea.value
        set(value) { codeTextArea.value = value }

    var acc: Num = Num(0)
        set(value) { accDiv.textContent = "$value" }
    var bak: Num = Num(0)
        set(value) { bakDiv.textContent = "($value)" }
    var last: Direction? = Direction.DOWN
        set(value) { lastDiv.textContent = value?.toString() ?: "N/A" }
    var mode: Mode = Mode.Idle
        set(value) { modeDiv.textContent = value.toString() }
    var idle: Int = 0
        set(value) { idleDiv.textContent = value.toString() }

    fun dataBind(core: Core.T21Basic) {
        acc = core.acc
        bak = core.bak
        last = core.last
        mode = core.mode
        idle = core.idlePercent
    }
}

class Logger(override val dom: DOM, override val identifier: String) : Widget(dom, identifier) {
    override val rootHtmlElement: HTMLElement get() = logDiv
    val logDiv: HTMLDivElement = dom.newElement("div", "${identifier}_logDiv")
    init {
        logDiv.style.whiteSpace = "pre-line" // https://www.w3schools.com/cssref/pr_text_white-space.asp
        logDiv.style.overflowY = "scroll" // https://stackoverflow.com/questions/32643045/scrolling-div-inside-a-div-with-max-height-set
        logDiv.style.height = "300px"
        logDiv.style.maxHeight = "300px"
    }

    fun log(s: String) {
        val logTextDiv = dom.newElement<HTMLDivElement>("div", "logTextDiv", s)
        logDiv.appendChild(logTextDiv)
        logDiv.scrollTop = logDiv.scrollHeight.toDouble() // https://stackoverflow.com/questions/270612/scroll-to-bottom-of-div
    }
}