// Write a safeSqrt function that wraps Math.sqrt, but returns a union type to indicate errors. 
// It should only work for positive numbers and zero. 
// That will force callers to handle the error when the argument is a negative number.
// If the input is negative, your function should return an object with {kind: 'failure'}.
// If the input is positive or zero, it should return an object with {kind: 'success', value: /* computed square root here */}.

type success = {
    kind: 'success',
    value: number,
}

type failure = {
    kind: 'failure',
}

function safeSqrt(n: number): success | failure {
    let result = Math.sqrt(n)

    if (isNaN(result)) {
        return { kind: 'failure' }
    }
    return { kind: 'success', value: result }
}