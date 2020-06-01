// Cats and dogs are both animals, but cats meow and dogs bark. 

type Cat = {
    kind: "cat"
    meow: () => string
}
type Dog = {
    kind: "dog"
    bark: () => string
}
type Animal = Cat | Dog 
