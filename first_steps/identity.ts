// write a generic identity function.
// an identity function is one that returns its argument without changing it.


function identity<T>(arg: T) :T{
    return arg
}

console.log(identity("cat"))
console.log(identity(123))
console.log(identity<string>("dog"))