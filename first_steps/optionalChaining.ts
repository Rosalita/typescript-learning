// Optional Chaining is supported in TypeScript 3.7 and above.
// It adds a new ?. operator. 
// If a isn't null or undefined, then a?.b means the same as a.b. 
// But if a is null or undefined, then a?.b returns undefined.

// During compilation, the compiler will write this check for us whenever 
// we do ?.: (a === null || a === undefined) ? undefined : a.b.
// With ?., we can safely access properties and sub-properties of an object that may be undefined.

type Person = {name: string}
function getUser(): Person | undefined {
  return {name: 'Amir'}
}
console.log(getUser()?.name) //Amir

// One important detail: even if a is null, the expression a?.b still returns undefined. 
// You can think of ?. as "preferring" undefined.


type User = {
    name: string,
    address: Address | undefined,
  }
  type Address = {
    city: string,
    postalCode: string | undefined,
  }
 
const users: User[] = [
    {
      name: 'Amir',
      address: {
        city: 'Paris',
        postalCode: '75010',
      }
    },
    {
      name: 'Betty',
      address: {
        city: 'Nassau',
        postalCode: undefined,
      }
    },
    {
      name: 'Cindy',
      address: undefined,
    },
  ]

// get a list of postcodes
console.log(users.map(user => user?.address?.postalCode))
