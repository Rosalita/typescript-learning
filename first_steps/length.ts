// Write a function length<T> that returns the length of an array.
// It should be generic working with any element type.


function len<T>(arr: Array<T>): number {
    return arr.length
}

console.log(len<number>([1,2,3]))
console.log(len([1,2,3]))

