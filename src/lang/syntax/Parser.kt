package lang.syntax

import utils.Result

object Parser {

    // La procrastination : au lieu de faire un parseur, j'ai voulu faire un parseur qui renvoie
    // exactement les mêmes erreurs que l'original, et qui souligne les erreurs pareil,
    // sauf que je veux renvoyer une liste d'erreurs plutôt que juste la première. Je suis fou.

    // TODO réécrire avec des exceptions. Merde, c'est pas la fin du monde même si chaque ligne throw... Il faudrait que j'aie un peu plus confiance en mon runtime

    // TODO: highlighting des la location des erreurs

    data class Location(val lineNumber: Int, val columnRange: IntRange) // Everything is 1-based.

    sealed class Error {
        // Here presented in order of detection.
        class InvalidLabel : Error() // Rare error for some empty labels with commas? // TODO: finir de reverse le comportement de TIS-100 ; github.com/hthh/tis100sim says "commas are optional and '!' is whitespace"
        class LabelIsAlreadyDefined : Error() // The label is highlighted.
        class InvalidOpcode(val opcodeName: String) : Error() // The opcode is highlighted.
        class MissingOperand : Error() // The whole line is highlighted.
        class TooManyOperands : Error() // The extra arguments are highlighted.
        class InvalidExpression(val expressionName: String) : Error() // The expression is highlighted.
        class InvalidRegister(val registerName: String) : Error() // The register is highlighted.
        class UndefinedLabel : Error() // The label is highlighted.
        override fun toString(): String = when (this) {
            is LabelIsAlreadyDefined -> "LABEL IS ALREADY DEFINED"
            is InvalidOpcode -> "INVALID OPCODE \"$opcodeName\""
            is MissingOperand -> "MISSING OPERAND"
            is TooManyOperands -> "TOO MANY OPERANDS"
            is InvalidExpression -> "INVALID EXPRESSION \"$expressionName\""
            is InvalidRegister -> "INVALID REGISTER \"$registerName\""
            is UndefinedLabel -> "UNDEFINED LABEL"
            is InvalidLabel -> "INVALID LABEL"
        }
    }

    fun parse(sourceCode: String): Result<SyntaxList, List<Error>> {
        val errors = mutableListOf<Error>()
        val lineList = mutableListOf<Line>()
        val lines = sourceCode.toUpperCase().lines()
                .map { it.replace(",", " ") }

        // First pass: labels.
        val (declaredLabels, duplicateLabelErrors) = findLabels(lines
                .map { it.replaceFirst("!", " ") })
        errors.addAll(duplicateLabelErrors)

        // Second pass: everything else.
        lines.withIndex().forEach { (index, line) ->
            val hasBreakpoint = line.contains('!')
            val line2 = line.replaceFirst("!", " ")
            val lineNumber = index + 1
            val (code, comment) = splitComment(line2)
            val result = parseCode(code, lineNumber, declaredLabels)
            when (result) {
                is Result.Failure -> errors.add(result.error)
                is Result.Success -> {
                    val (label, instruction) = result.item
                    lineList.add(Line(label, instruction, comment, hasBreakpoint))
                }
            }
        }

        return if (errors.count() > 0)
            Result.Failure(errors.toList())
        else
            Result.Success(SyntaxList(lineList))
    }

    private fun findLabels(lines: List<String>): Pair<Set<Label>, List<Error.LabelIsAlreadyDefined>> {
        fun label(line: String): String? {
            val (code, _) = splitComment(line)
            val (labelName, _) = splitLabel(code)
            return labelName
        }
        val labelNames = lines.mapNotNull { label(it) }
        val duplicateLabelNames = labelNames.groupBy { it }.filter { it.value.count() > 1 }.map { it.key }.toSet()
        val errors = lines.withIndex().mapNotNull { (index, line) ->
            val labelName = label(line)
            if (labelName != null && duplicateLabelNames.contains(labelName))
                Error.LabelIsAlreadyDefined()
            else
                null
        }
        val labels = labelNames.map { Label(it) }.toSet()
        return Pair(labels, errors)
    }

    private fun splitComment(line: String): Pair<String, String?> = splitOnFirst("#", line) ?: Pair(line, null)
    private fun splitLabel(code: String): Pair<String?, String> = splitOnFirst(":", code) ?: Pair(null, code)

    private fun splitOnFirst(delimiter: String, input: String): Pair<String, String>? {
        val parts = input.split(delimiter)
        return if (parts.count() > 1) Pair(parts[0], input.substring(parts[0].length + delimiter.length)) else null
    }

    private fun parseCode(code: String, lineNumber: Int, declaredLabels: Set<Label>): Result<Pair<Label?, Instruction?>, Error> {
        val (labelName, inst) = splitLabel(code)
        val label = labelName?.let { Label(it) }

        val trimmed = inst.trim()
        if (trimmed == "")
            return Result.Success(Pair(null, null))
        val parts = trimmed.split(" ").filter { it != "" }
        val at = { columnRange: IntRange ->
            val labelLength = 1 + (labelName?.length ?: 0)
            Location(lineNumber, IntRange(columnRange.start + labelLength, columnRange.endInclusive + labelLength))
        }

        val opcodeName = parts[0]
        val opcode = Opcode.parse(opcodeName)
        if (opcode == null)
            return Result.Failure(Error.InvalidOpcode(opcodeName))

        val actualArity = parts.count() - 1
        val expectedArity = opcode.arity()
        when {
            actualArity < expectedArity -> return Result.Failure(Error.MissingOperand())
            actualArity > expectedArity -> return Result.Failure(Error.TooManyOperands())
        }
        return when (opcode) {
            Opcode.NOP,
            Opcode.SWP,
            Opcode.SAV,
            Opcode.NEG -> Result.Success(Pair<Label?, Instruction?>(label, Instruction.createNullary(opcode)))
            Opcode.ADD,
            Opcode.SUB,
            Opcode.JRO -> {
                val source = parseSource(parts[1])
                return if (source == null)
                    Result.Failure(Error.InvalidExpression(parts[1]))
                else
                    Result.Success(Pair<Label?, Instruction?>(label, Instruction.createUnary(opcode, source)))
            }
            Opcode.MOV -> {
                val source = parseSource(parts[1])
                if (source == null)
                    return Result.Failure(Error.InvalidExpression(parts[1]))
                val destination = parseDestination(parts[2])
                if (destination == null)
                    return Result.Failure(Error.InvalidRegister(parts[2]))

                return Result.Success(Pair<Label?, Instruction?>(label, Instruction.createMov(source, destination)))
            }
            Opcode.JMP,
            Opcode.JEZ,
            Opcode.JNZ,
            Opcode.JGZ,
            Opcode.JLZ -> {
                val targetLabel = parseLabel(parts.last(), declaredLabels)
                return if (targetLabel == null)
                    Result.Failure(Error.UndefinedLabel())
                else
                    Result.Success(Pair<Label?, Instruction?>(label, Instruction.createJump(opcode, targetLabel)))
            }
        }
    }

    private fun parseLabel(labelName: String, declaredLabels: Set<Label>): Label? =
            if (declaredLabels.contains(Label(labelName))) Label(labelName) else null

    private fun parseSource(token: String): Source? = when { // ACC | PORT | NUM
        token.toIntOrNull() != null -> Constant(token.toInt())
        parseDestination(token) != null -> parseDestination(token)
        else -> null
    }

    private fun parseDestination(token: String): Destination? = when (token) { // ACC | NIL | PORT
        "ACC" -> ACC
        "NIL" -> NIL
        "UP" -> Direction.UP
        "DOWN" -> Direction.DOWN
        "LEFT" -> Direction.LEFT
        "RIGHT" -> Direction.RIGHT
        "ANY" -> Port.ANY
        "LAST" -> Port.LAST
        else -> null
    }
}
