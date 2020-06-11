// Interface Vs Type Alias
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases

// There are key differences between `type` and `interface`

// The syntax for a Type Alias can be written as:
type AB = { a: number }

// The syntax for an interface can be written as:
interface CD { a: number }

// using `type` doesn't create a new name.
// for example, error messages won't use the type alias name.

// interfaces do create a new name that is used everywhere.

function aliased(arg: AB): AB {
    return arg
}

function interfaced(arg: CD): CD {
    return arg
}

// Because an ideal property of software is being open to extension, 
// you should always use an interface over a type alias if possible.

// On the other hand, if you can’t express some shape with an interface 
// and you need to use a union or tuple type, type aliases are usually the way to go.

// Types are used for discriminated unions

interface Square {
    kind: "square"
    size: number
}
interface Rectangle {
    kind: "rectangle"
    width: number
    height: number
}
interface Circle {
    kind: "circle"
    radius: number
}

type Shape = Square | Rectangle | Circle

function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

