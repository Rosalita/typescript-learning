
// Write a function that takes an array of tuples. 
// Each tuple consists of a name (a string) and an age (a number). 
// Your function should return only the names.

// first attempt
function names(arr: [string, number][]): string[] {
  let allNames: string[] = []
  arr.forEach((item: [string, number]) => { allNames.push(item[0]); })
  return allNames
}

// the type of an array of number can be written number[] or Array<number>
// an array of tuple can be written as Array<[type1, type2]>
function names2(arr: Array<[string, number]>): Array<string> {
  let allNames: Array<string> = []
  arr.forEach((item: [string, number]) => { allNames.push(item[0]); })
  return allNames
}


let n = names2([['Amir', 34], ['Betty', 17]])
console.log(n)
