
// Write a removeUndefineds function that removes all undefineds from an array of numbers.

function removeUndefineds(maybeNumbers: (number | undefined)[]): number[] {
    const numbers: number[] = []
    for (const maybeNumber of maybeNumbers) {
        if (typeof maybeNumber == 'number') {
            numbers.push(maybeNumber)
        }
    }
    return numbers
}

console.log(removeUndefineds([2, undefined, 4, undefined, 6])) // [2,4,6]