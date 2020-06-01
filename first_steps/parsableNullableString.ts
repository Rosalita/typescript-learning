// Write a function that turns a string | undefined into a number.
// If the argument was undefined, the function should return undefined.
// If the argument was a string containing a valid number, it should return that number.
// If the argument was a string without a number, it should return undefined.

function maybeParseString(str: string | undefined): number | undefined {

    if (str === undefined) {
        return undefined
    }

    const num = parseInt(str)
    if (isNaN(num)) {
        return undefined
    }
    return num
}