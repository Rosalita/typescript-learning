// write a function that returns its argument as a string
// it should take a string, a number or a boolean and return a string

function stringify(arg: number | string | boolean): string {
    return arg.toString()
}

console.log( stringify(true))
console.log( stringify("foo"))
console.log( stringify(123))



