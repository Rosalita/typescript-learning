// Write a function that returns the name of an object. 
// It should work for any object with a name: string property.

function getName(obj: { name: string }): string {
    return obj.name
}
