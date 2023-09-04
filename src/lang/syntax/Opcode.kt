package lang.syntax

enum class Opcode {
    NOP,
    SWP,
    SAV,
    NEG,
    ADD,
    SUB,
    MOV,
    JMP,
    JEZ,
    JNZ,
    JGZ,
    JLZ,
    JRO;

    fun arity() = when (this) {
        Opcode.NOP -> 0
        Opcode.SWP -> 0
        Opcode.SAV -> 0
        Opcode.NEG -> 0
        Opcode.ADD -> 1
        Opcode.SUB -> 1
        Opcode.MOV -> 2
        Opcode.JMP -> 1
        Opcode.JEZ -> 1
        Opcode.JNZ -> 1
        Opcode.JGZ -> 1
        Opcode.JLZ -> 1
        Opcode.JRO -> 1
    }

    companion object {
        fun parse(string: String): Opcode? = when (string) {
            "NOP" -> Opcode.NOP
            "SWP" -> Opcode.SWP
            "SAV" -> Opcode.SAV
            "NEG" -> Opcode.NEG
            "ADD" -> Opcode.ADD
            "SUB" -> Opcode.SUB
            "MOV" -> Opcode.MOV
            "JMP" -> Opcode.JMP
            "JEZ" -> Opcode.JEZ
            "JNZ" -> Opcode.JNZ
            "JGZ" -> Opcode.JGZ
            "JLZ" -> Opcode.JLZ
            "JRO" -> Opcode.JRO
            else -> null
        }
    }
}