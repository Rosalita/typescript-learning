// Write a function that adds 1, subtracts 1, or does nothing to a number. 
// Argument 1 is the number. Argument 2 is 'add', 'subtract', or 'leave-alone'.
// Arg2 is a literal type

function addOrSubtract(arg1 :number, arg2 : 'add' | 'subtract' | 'leave-alone') :number {
    switch(arg2){
        case 'add':
            return arg1 + 1;
        case 'subtract':
            return arg1 - 1;
        case 'leave-alone':
            return arg1
    }
}

console.log(addOrSubtract(10, 'add'))
