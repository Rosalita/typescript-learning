// Some functions never return. For example, a function that always throws an exception never returns.

function throws1() {
    throw new Error('oh no')
}
throws1() // will never return
// code after this call will never exectute at all

function throws2(): never {
    throw new Error('oh no')
  }


  // The never type is a bit strange. 
  // It's assignable to any other type. 
  // We can assign it to a number variable, for example. 
  // The function will continue to throw the exception, like usual, so the answer here is the same as above.

  const n: number = throws2()

  // The compiler knows that our throws function never returns, 
  // so it also knows that nothing will ever be assigned to the n variable. 
  // Types exist to ensure that the data is correct at runtime. 
  // If the assignment never actually happens at runtime, 
  // and the compiler knows that for sure in advance, then the types don't matter.

  // However, we can't assign any other type to never. 
  // That would break the rule of never: that it never actually holds a value. 
  // Trying to assign any value to a never is always a type error.
  // e.g. const aNever: never = 5

  // Absolutely nothing can be assigned to a never; not even an any!

  // If a function always throws, but has no explicit return type, 
  // then TypeScript will infer a void return type. 
  // That's not bad, but it's better to explicitly mark it as never, 
  // which gives TypeScript a bit more information to work with.


  // A quick summary of void and never.
  // void means that the function eventually terminates and returns. 
  // It's just that it doesn't return any value. 
  // The function either has no return statement, 
  // or it has a bare return statement with no value after it. 
  // The void type isn't assignable to anything because it represents the absence of a value.

  // never means that the function never terminates normally. 
  // It might throw an exception or go into an infinite loop. 
  // If we're in a server-side system like Node, it might call process.exit() to terminate the process. 
  // One way or another, execution never reaches the end of the function. 
  // The never type is assignable to anything because the compiler knows that the assignment will never actually happen at runtime.

  




