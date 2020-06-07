 
function isString(s: unknown): s is string {
    return typeof s === 'string'
  }

console.log(isString('a')) // true
console.log(isString(1)) // false

const z: unknown = 'a string'
const z2: string = isString(z) ? z : ''

console.log(z2) // 'a string

const s: unknown = 5
const s2: string = isString(s) ? s : ''

console.log(s2) //''