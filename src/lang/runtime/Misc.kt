package lang.runtime

import lang.syntax.*

enum class CoreType {
    T21Basic,
    T30Stack,
    T20,
    T31,
    Input,
    Output,
    PuzzleImage,
    SandboxImage,
}

enum class Mode {
    Idle,
    Run,
    Read,
    Write,
    ImplementationError; // temporary invalid state after a writing MOV is processed by phase 1

    override fun toString(): String = when (this) {
        Idle -> "IDLE"
        Run -> "RUN"
        Read -> "READ"
        Write -> "WRTE"
        ImplementationError -> "EROR"
    }
}

data class Num(private val num: Int) { // wrapping Int ensures never forgetting to quietly clamp. Say no to primitive obsession
    val number = when {
        num < -999 -> -999
        num > 999 -> 999
        else -> num
    }
    operator fun unaryMinus() = Num(-num)
    operator fun plus(arg: Num) = Num(number + arg.number)
    operator fun minus(arg: Num) = Num(number - arg.number)
    override fun toString(): String = "$number"
}

data class CorePosition(val x: Int, val y: Int) : Comparable<CorePosition> { // x→, y↓
    fun up() = CorePosition(x, y - 1)
    fun down() = CorePosition(x, y + 1)
    fun left() = CorePosition(x - 1, y)
    fun right() = CorePosition(x + 1, y)
    fun neighbor(direction: Direction) = when (direction) {
        Direction.UP -> up()
        Direction.DOWN -> down()
        Direction.LEFT -> left()
        Direction.RIGHT -> right()
    }
    override fun toString(): String = "$x,$y"
    override fun compareTo(other: CorePosition) = x.compareTo(other.x).let {
        if (it != 0) it else y.compareTo(other.y)
    }
}

data class PipeKey private constructor(val from: CorePosition, val to: CorePosition) {
    companion object {
        fun readingFrom(corePosition: CorePosition, direction: Direction) = PipeKey(from = corePosition.neighbor(direction), to = corePosition)
        fun writingTo(corePosition: CorePosition, direction: Direction) = PipeKey(from = corePosition, to = corePosition.neighbor(direction))
        fun fromTo(from: CorePosition, to: CorePosition) = PipeKey(from = from, to = to)
    }
}
