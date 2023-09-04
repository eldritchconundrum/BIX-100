package utils

class Logger(val prefix: String) {
    companion object {
        private var logFunction: ((String) -> kotlin.Unit) = ::println
        fun initDOMLog(logFunction: ((String) -> kotlin.Unit)) { this.logFunction = logFunction }
        fun log(string: String) { logFunction(string) }
    }
    fun log(string: String) { logFunction("$prefix: $string") }
}