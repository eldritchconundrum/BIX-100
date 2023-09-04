package ui

import lang.runtime.CorePosition
import utils.Logger
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.dom.createElement

class DOM {
    private val gameDiv: HTMLDivElement = document.getElementById("gameDiv") as HTMLDivElement

    val titleInput: HTMLInputElement
    val descriptionInput: HTMLTextAreaElement
    val coreGrid: CoreGrid
    val stopButton: HTMLButtonElement
    val stepButton: HTMLButtonElement
    val playButton: HTMLButtonElement
    val fastButton: HTMLButtonElement
    val veryFastButton: HTMLButtonElement
    val instructionCountDiv: HTMLDivElement
    val currentCycleDiv: HTMLDivElement

    val logger: ui.Logger

    // Here I need to declare the type parameter as reified because I use a cast. And "reified" is only possible with "inline" because JVM sux.
    inline fun <reified T: Element> newElement(tagName: String, identifier: String? = null, text: String? = null, classes: List<String> = listOfNotNull(identifier)): T {
        return document.createElement(tagName) {
            if (text != null) {
                appendChild(document.createTextNode(text))
            }
            if (identifier != null)
                this.id = identifier
            val idAndClasses = listOfNotNull(identifier) + classes
            if (idAndClasses.isNotEmpty()) {
                this.className = idAndClasses.joinToString(" ")
            }
        } as T
    }

    fun<T> newTable(identifier: String, rows: List<List<T>>, f: (HTMLTableCellElement, T, Pair<Int, Int>) -> Unit): HTMLTableElement {
        val table = newElement<HTMLTableElement>("table", identifier)
        for ((rowIndex, row) in rows.withIndex()) {
            val tr = newElement<HTMLTableRowElement>("tr", "${identifier}__tr__$rowIndex")
            for ((colIndex, item) in row.withIndex()) {
                val tag = "td" //if (rowIndex == 0 || colIndex == 0) "th" else "td"
                val td = newElement<HTMLTableCellElement>(tag, "${identifier}__tr__${rowIndex}__td__$colIndex")
                f(td, item, Pair(rowIndex, colIndex))
                tr.appendChild(td)
            }
            table.appendChild(tr)
        }
        return table
    }

    fun br() = newElement<HTMLBRElement>("br")
    fun div() = newElement<HTMLDivElement>("div")

    // I happened to find how to break KotlinJs codegen.
    // Declare:     inline fun f() = document.createElement("div") { }
    // Then call:   0.until(1).map { f() }
    // function DOM$f$lambda($receiver) gets inlined and declared inside the until loop and I get "SyntaxError: In strict mode code, functions can only be declared at top level or immediately within another function."
    init {
        titleInput = newElement<HTMLInputElement>("input", "titleInput", "TITLE")
        titleInput.value = "TITLE"
        descriptionInput = newElement<HTMLTextAreaElement>("textarea", "descriptionInput", "DESCRIPTION")

        stopButton = newElement<HTMLButtonElement>("button", "stopButton", "STOP", listOf("button"))
        stepButton = newElement<HTMLButtonElement>("button", "stepButton", "STEP", listOf("button"))
        playButton = newElement<HTMLButtonElement>("button", "playButton", "PLAY", listOf("button"))
        fastButton = newElement<HTMLButtonElement>("button", "fastButton", "FAST", listOf("button"))
        veryFastButton = newElement<HTMLButtonElement>("button", "veryFastButton", "FASTESTEST", listOf("button"))

        instructionCountDiv = newElement("div", "instructionCountDiv")
        currentCycleDiv = newElement("div", "currentCycleDiv")

        logger = ui.Logger(this, "")

        listOf(titleInput, br(),
                descriptionInput, br()).forEach { gameDiv.appendChild(it) }
        coreGrid = CoreGrid(this, "coreGrid", rowCount = 3, colCount = 4)
        gameDiv.appendChild(coreGrid.rootHtmlElement)
        listOf(stopButton, stepButton, playButton, fastButton, veryFastButton, br(),
                instructionCountDiv, currentCycleDiv, br(),
                newElement("hr"),
                logger.rootHtmlElement, br()).forEach { gameDiv.appendChild(it) }

        Logger.initDOMLog(logger::log)




        coreGrid.cores[CorePosition(0, 0)]?.sourceCode = "HEY: MOV RIGHT RIGHT # WIDER"
        coreGrid.cores[CorePosition(1, 0)]?.sourceCode = "ADD 1\nNOP\nNOP\nNOP\nNOP\nNOP\nNOP\nNOP\nNOP\nNOP"
        coreGrid.cores[CorePosition(1, 2)]?.sourceCode = "MOV 1 RIGHT\nMOV 999 ACC\nD: SUB 1\nJGZ D\n"
        coreGrid.cores[CorePosition(2, 2)]?.sourceCode = "ADD LEFT"

        val debugComplexMOVPriority = false
        if (debugComplexMOVPriority) {
            coreGrid.cores[CorePosition(0, 0)]?.sourceCode = "MOV 1 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP"
            coreGrid.cores[CorePosition(1, 0)]?.sourceCode = "MOV 2 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP"
            coreGrid.cores[CorePosition(2, 0)]?.sourceCode = "MOV 4 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP"
            coreGrid.cores[CorePosition(3, 0)]?.sourceCode = "MOV 8 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP"

            coreGrid.cores[CorePosition(0, 1)]?.sourceCode = "MOV 16 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP"
            coreGrid.cores[CorePosition(1, 1)]?.sourceCode = "MOV 32 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP"
            coreGrid.cores[CorePosition(2, 1)]?.sourceCode = "MOV 64 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP"
            coreGrid.cores[CorePosition(3, 1)]?.sourceCode = "MOV 128 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP"

            coreGrid.cores[CorePosition(0, 2)]?.sourceCode = "MOV 64 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP"
            coreGrid.cores[CorePosition(1, 2)]?.sourceCode = "MOV -8 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP"
            coreGrid.cores[CorePosition(2, 2)]?.sourceCode = "MOV 2 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP"
            coreGrid.cores[CorePosition(3, 2)]?.sourceCode = "MOV 1 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP"
        }
    }
}