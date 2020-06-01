// Write a generic function applyFunction that takes two arguments:
// f, a function that takes an argument with a generic type T and returns a value of type T.
// x, a value of the same generic type T
// applyFunction should return the result of f(x).


function applyFunction<T>(f: ((arg: T) => T), x: T): T {
    return f(x)
}
