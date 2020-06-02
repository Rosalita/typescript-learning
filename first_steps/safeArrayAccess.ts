// Write a safe function elemAt<T> that acts like a simple arr[i], but returns a union type to indicate errors. 
// It should be generic, working with any element type.
// If the array is empty, return {kind: 'failure', reason: 'array is empty'}.
// If the index is outside of the array's bounds, return {kind: 'failure', reason: 'no element at that index'}.
// Otherwise, return {kind: 'success', value: /* element at index i */}.

type succeed<T> = {
    kind: 'success',
    value: T,
}

type fail = {
    kind: 'failure',
    reason: string,
}

function elemAt<T>(arr: Array<T>, index: number): succeed<T> | fail {

    if (arr.length === 0) {
        return { kind: "failure", reason: "array is empty" }
    }

    if (index < 0 || index > Array.length + 1) {
        return { kind: 'failure', reason: 'no element at that index' }
    }

    return { kind: 'success', value: arr[index] }

}