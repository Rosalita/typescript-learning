type TakesNumberReturnsNumber = (x: number) => number

function add1(x: number): number {
    return x + 1
}

const aFunction: TakesNumberReturnsNumber = add1

console.log(aFunction(1))


const arrayOfFunctions: ((x: number) => number)[] = [add1]
arrayOfFunctions[0](4)



function three(): number {
    return 3
}

function callFunction(f: () => number): number {
    return f()
}

function callFunctionWithThreeFunction(f: (f: () => number) => number): number {
    return f(three)
}

callFunctionWithThreeFunction(callFunction)