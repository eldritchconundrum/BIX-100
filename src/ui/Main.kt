package ui

import lang.runtime.Core
import lang.runtime.CorePosition
import lang.runtime.RuntimeState
import lang.syntax.Parser
import utils.Logger
import utils.assertEq

var global: UI? = null // make things easily accessible from the browser's JS console

fun main(args: Array<String>) {
    println("initializing...")
    val dom = DOM()
    Logger.log("DOM created...")
    tests()
    global = UI(dom)
    println("to access Kotlin internals, use window['BIX-100'].ui.global")
    Logger.log("GUI started.")
}

fun tests() {
    Logger.log("Running tests...")
    parsingTests()
    executionTests()
}

fun executionTests() {
    testSingleCore(2, "ADD 1\nADD 2\nADD 4\nADD 8") { assertEq(3, it.acc.number, "trivial") }
    testSingleCore(5, "ADD 5\nD:SUB 1\nJGZ D\nNOP") { assertEq(3, it.acc.number, "loop 1") }
    testSingleCore(6, "ADD 5\nD:SUB 1\nJGZ D\nNOP") { assertEq(2, it.acc.number, "loop 2") }
    testSingleCore(5, "ADD 5\nD:\nSUB 1\nJGZ D\nNOP") { assertEq(3, it.acc.number, "label with empty inst") }
    testCores(3, listOf("MOV 73 RIGHT", "MOV LEFT RIGHT", "MOV LEFT ACC\nADD 100")) { assertEq(73, it[2].acc.number, "MOV timing 1 ") }
    testCores(3, listOf("MOV RIGHT ACC\nADD 100", "MOV RIGHT LEFT", "MOV 73 LEFT")) { assertEq(73, it[0].acc.number, "MOV timing 2") }
    testCores(4, listOf("MOV 55 RIGHT\nADD 42\nADD 100\nADD 100", "NOP\nNOP\nMOV LEFT ACC")) { assertEq(42, it[0].acc.number, "blocking MOV") }

    val data = listOf(
            "MOV 1 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP",
            "MOV 2 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP",
            "MOV 4 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP",
            "MOV 8 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP",
            "MOV 16 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP",
            "MOV 32 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP",
            "MOV 64 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP",
            "MOV 128 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP",
            "MOV 64 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP",
            "MOV -8 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP",
            "MOV 2 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP",
            "MOV 1 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP")
    testCores(8, data) {
        assertEq(7, it[0].acc.number, "complex MOV priority regression test #0")
        assertEq(3, it[1].acc.number, "complex MOV priority regression test #1")
        assertEq(16, it[2].acc.number, "complex MOV priority regression test #2")
        assertEq(28, it[3].acc.number, "complex MOV priority regression test #3")

        assertEq(48, it[4].acc.number, "complex MOV priority regression test #4")
        assertEq(128, it[5].acc.number, "complex MOV priority regression test #5")
        assertEq(512, it[6].acc.number, "complex MOV priority regression test #6")
        assertEq(320, it[7].acc.number, "complex MOV priority regression test #7")

        assertEq(104, it[8].acc.number, "complex MOV priority regression test #8")
        assertEq(48, it[9].acc.number, "complex MOV priority regression test #9")
        assertEq(3, it[10].acc.number, "complex MOV priority regression test #10")
        assertEq(7, it[11].acc.number, "complex MOV priority regression test #11")
    }
}

fun testSingleCore(steps: Int, text: String, check: (Core.T21Basic) -> Unit) = testCores(steps, listOf(text)) { check(it.single()) }
fun testCores(steps: Int, coreTexts: List<String>, check: (List<Core.T21Basic>) -> Unit) =
        testRun(steps, coreTexts) { check(it.cores.toList().sortedBy { it.first }.map { it.second }.filterIsInstance<Core.T21Basic>()) }
fun testRun(steps: Int, coreTexts: List<String>, check: (RuntimeState) -> Unit) {
    val cores = coreTexts.map { text -> Core.T21Basic().also { it.text = text } }
    val corePositions = IntRange(0, cores.count() - 1).map { CorePosition(it, 0) }
    val r = RuntimeState(corePositions.zip(cores).toMap())
    r.step() // init
    repeat(steps) { r.step() }
    check(r)
}

fun parsingTests() {
    val data = mapOf(
            //TODO: des vraies données de test

            "" to "Success(item=)",
            "," to "Success(item=)",
            ",," to "Success(item=)",
            ",,," to "Success(item=)",
            ":" to "Failure(error=[INVALID LABEL])",
            "::" to "Failure(error=[INVALID LABEL])",
            ":," to "Failure(error=[INVALID LABEL])",
            ",:" to "Success(item=)",
            ",::" to "Failure(error=[INVALID OPCODE \":\"])",
            "!,!,:" to "Success(item=)",
            "!:" to "Failure(error=[INVALID LABEL \":\"])",
            "!!:" to "Success(item=)",
            "!!!:" to "Success(item=)",
            "!,!,!,:" to "Success(item=)",
            ",!,!,!,:" to "Failure(error=[INVALID OPCODE \"!\"])",
            ",,!,,!:" to "Success(item=)",
            "!NOP!" to  "Failure(error=[INVALID OPCODE \"NOP!\"])",
            "!NOP !" to "Failure(error=[TOO MANY OPERANDS])",
            ",: JMP ," to "Failure(error=[MISSING OPERAND])",
            "!!: JMP !," to "Success(item=)",
            "!!: JMP !!," to "Failure(error=[UNDEFINED LABEL])",
            ",!!: JMP !" to "Failure(error=[INVALID OPCODE \"!!:\"])",

            "m:" to "Success(item=)",
            ":t" to "Failure(error=[INVALID OPCODE \"T\"])",
            "f" to "Failure(error=[INVALID OPCODE \"F\"])",
            "d#" to "Failure(error=[INVALID OPCODE \"D\"])",
            "+:" to "Success(item=)",

            "nop" to "Success(item=NOP)",
            "ADD 4" to "Success(item=ADD(source=4))",

            "MOV" to "Failure(error=[MISSING OPERAND])",
            "MOV ACC" to "Failure(error=[MISSING OPERAND])",
            "MOV ACC,ROBRANCHE" to "Failure(error=[INVALID REGISTER \"ROBRANCHE\"])",
            "MOV BAR ACC" to "Failure(error=[INVALID EXPRESSION \"BAR\"])",
            "MOV UP UP DOWN" to "Failure(error=[TOO MANY OPERANDS])",
            "MOV DOWN LEFT RIGHT LEFT RIGHT" to "Failure(error=[TOO MANY OPERANDS])",
            "MOV B A" to "Failure(error=[INVALID EXPRESSION \"B\"])",
            "ILIEK2:MOV IT MOV IT" to "Failure(error=[TOO MANY OPERANDS])",

//            "MOV UP NIL" to "Success(item=MOV(source=UP, destination=NIL))",
            "MOV UP ACC" to "Success(item=MOV(source=UP, destination=ACC))",
            "MOV UP  ACC" to "Success(item=MOV(source=UP, destination=ACC))",
            "MOV  UP ACC" to "Success(item=MOV(source=UP, destination=ACC))",
            "MOV  UP  ACC" to "Success(item=MOV(source=UP, destination=ACC))",
            " MOV UP ACC" to "Success(item=MOV(source=UP, destination=ACC))",
            "MOV UP ACC " to "Success(item=MOV(source=UP, destination=ACC))",
            "MOV LAST ANY" to "Success(item=MOV(source=LAST, destination=ANY))")
    for ((input, expected) in data) {
        val result = Parser.parse(input)
        val actual = result.toString()
        assertEq(expected, actual, "input: '$input'")
    }
}
