
function defined(maybeNumber: number | undefined): maybeNumber is number {
    return maybeNumber !== undefined
}

//Note the new syntax here: maybeNumber is number. 
//That's the type predicate: it lets our function be used as a type guard. 
//It tells the compiler that maybeNumber has the type number, even outside of this function. 
//But only if defined returns true! If defined returns false then the compiler gets no new type information.

console.log(defined(undefined)) // false
console.log(defined(3)) // true

// this can be used as a type guard

const maybeNumber = ((): number | undefined => 1)()
let x: number
if (defined(maybeNumber)) {
    x = maybeNumber
} else {
    x = 0
}

console.log(x)

// This can be done using a filter


function defined2(maybeNumber: number | undefined): maybeNumber is number {
    return maybeNumber !== undefined
}
const maybeNumbers: (number | undefined)[] = [1, 2, undefined, 3, 4]

const numbers: number[] = maybeNumbers.filter(defined)

const numbers2: number[] = numbers // no longer a [] of number | undefined
console.log(numbers)
console.log(numbers2)