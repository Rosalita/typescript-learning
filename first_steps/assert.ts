function assert1(condition: boolean) {
    if (!condition) {
        throw new Error('Assertion failed')
    }
}

const var1: number | string = ((): number | string => 1)()
assert1(typeof var1 === 'number')
//const var2: number = var1   // Type 'string' is not assignable to type 'number'.

// TypeScript 3.7 allows assertion functions to narrow types
// This is a simple example of an assertion function, it uses the word asserts

function assert2(condition: boolean): asserts condition {
    if (!condition) {
        throw new Error('Assertion failed')
    }
}

const var3: number | string = ((): number | string => 1)()

assert2(typeof var3 === 'number') // this line narrows var3's type to number.
const var4: number = var3 // so it can be assigned to a number
console.log(var4)


function assertString(s: unknown): asserts s is string{
    if (typeof s !== 'string') {
      throw new Error("Value wasn't a string: " + s)
    }
  }


   
function assertNumber(n: unknown): asserts n is number {
    if (typeof n !== 'number') {
      throw new Error("Value wasn't a number: " + n)
    }
  }

// Type guards and assertion functions are very closely related. 
// The difference is in the scope of their type narrowing.
// With a type guard like if (Array.isArray(x)) { ... }, 
// the type of x is narrowed only inside the ... block. 

// With an assertion function like assertNumber(x), 
// the type of x is narrowed for all code after the assertion call.


