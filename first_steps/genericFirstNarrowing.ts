// Write a function first that returns the first element of an array. 
// It should work for generic arrays, no matter the element type. 
// If we pass a single element, it should return just that element.

function myfirst<T>(arg1 : T | Array<T>): T {
    if(Array.isArray(arg1)){
        return arg1[0]
    }
    return arg1
}