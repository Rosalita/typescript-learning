// avoid using type any as safety of typescript is lost
// if a library does return type any its posible to narrow back to a certain type


function getNumberFromDatabase(): any {
    return 5
}


function safeNumber(n: any): number {
    if (typeof n === 'number') {
        return n
    } else {
        throw new Error('Got a non-number: ' + n)
    }
}

const n: any = 'five'
const n2: number = safeNumber(n)