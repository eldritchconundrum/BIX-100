package lang.syntax

interface Source // ACC | PORT | NUM
interface Destination : Source // ACC | PORT | NIL

object ACC : Source, Destination {
    override fun toString(): String = "ACC"
}

data class Label(val name: String) {
    override fun toString(): String = name + ":"
}

open class Constant(val number: Int) : Source {
    override fun toString(): String = number.toString()
}

object NIL : Constant(0), Destination {
    override fun toString(): String = "NIL"
}

sealed class Port : Source, Destination {
    object ANY : Port()
    object LAST : Port()
    override fun toString(): String = when (this) {
        is ANY -> "ANY"
        is LAST -> "LAST"
        is Direction.UP -> "UP"
        is Direction.LEFT -> "LEFT"
        is Direction.DOWN -> "DOWN"
        is Direction.RIGHT -> "RIGHT"
    }
}
sealed class Direction : Port() {
    object UP : Direction()
    object LEFT : Direction()
    object DOWN : Direction()
    object RIGHT : Direction()
    companion object {
        val all = listOf(Direction.UP, Direction.LEFT, Direction.RIGHT, Direction.DOWN)
    }
    fun opposite(): Direction = when (this) {
        UP -> DOWN
        LEFT -> RIGHT
        DOWN -> UP
        RIGHT -> LEFT
    }
}

class Line(val label: Label?, val instruction: Instruction?, val comment: String?, val hasBreakpoint: Boolean) {
    override fun toString(): String = "" + (label ?: "") + (instruction ?: "") + (if (comment != null) "#" + comment else "")
}

class SyntaxList(val lines: List<Line>) { // Like a syntax tree. But it's a list. :-O
    val instructions = lines.filter { it.instruction != null }.map { it.instruction }

    override fun toString(): String = lines.joinToString("\n")
}
