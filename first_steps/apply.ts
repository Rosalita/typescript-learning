// Write an apply function. It should take a function f and a number x.
// It should return f(x), which is also a number.

function applyFunction(f: ((num: number) => number), x :number): number{
    return f(x)
}

