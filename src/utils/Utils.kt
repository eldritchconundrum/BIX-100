package utils

// Ce type là, ok, il était plus pratique en Rust...
sealed class Result<out T, out TError> {
    data class Success<out T, out TError>(val item: T) : Result<T, TError>()
    data class Failure<out T, out TError>(val error: TError) : Result<T, TError>()
}

fun<T : Any> assertEq(expected: T, actual: T, message: String? = null) {
    if (actual != expected) {
        Logger.log("Assertion failed: ${message ?: ""}\texpected $expected, actual: $actual")
    }
}
