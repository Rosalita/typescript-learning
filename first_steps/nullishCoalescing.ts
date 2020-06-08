// The nullish coalescing operator is ??. It's like ||, 
// so we can use it to provide default values when something is null or undefined. 
// But unlike ||, it doesn't have the problems with 0 and '' being falsey. 
// When we write a ?? b, we'll only get b if a is null or undefined.

function numberOrOne(n: number | undefined): number {
    return n ?? 1
}
console.log(numberOrOne(3)) //3
console.log(numberOrOne(undefined)) //1
console.log(numberOrOne(0)) //1

console.log(null ?? 1) //1
console.log(undefined ?? 1) //1
console.log(false ?? 1) //false

