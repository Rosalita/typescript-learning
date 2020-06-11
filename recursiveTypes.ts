// Sometimes, a type needs to reference itself. 
// For example, we can define a type for arbitrarily-nested arrays of numbers. 
// Here are some values that it should allow:

// 1
// []
// [1]
// [1, 2, 3]
// [1, 2, [3, 4], 5]
// [[[[1]], 2, [3]]]

type NestedNumberArray = number | NestedNumberArray[]

// NestedNumberArray is a recursive type. 
// It references itself like a recursive function does. 
// And like a recursive function, that nesting can be resolved as many times as necessary.

// For example, let's consider [[[5]]]. 
// What is its type? We can find out by causing an intentional type error, 
// then looking at how TypeScript represents [[[5]]]'s type in the error message.

// const n: void = [[[5]]]
// type error: Type 'number[][][]' is not assignable to type 'void'. 

// [[[5]]] has the type number[][][]. 
// We can get that same type by expanding our NestedNumberArray type definition repeatedly. 
// At each step, we'll replace NestedNumberArray with either the left or right side of its union definition.


type Json =
  | null
  | boolean
  | string
  | number
  | Json[]
  | {[key: string]: Json}

// This type combines several type system features. 
// It has a union type. It has an array type, Json[].
// And it has an index signature type, {[key: string]: Json}.

 
const json: Json = {name: 'Amir'}

// You won't find yourself writing recursive types every day. 
// In fact, it's usually best to avoid them when there's another way. 
// They can be confusing, but sometimes you really do need them, 
// and in those cases you'll be glad that TypeScript supports them!


