// Write a function first<T> that returns the first element of an array. 
// It should be generic, working with any element type.

function first<T>(arr: Array<T>): T{
    return arr[0]
}

console.log(first([1,2,3,5]))
console.log(first(["foo", "bar", "baz"]))