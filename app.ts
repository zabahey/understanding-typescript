let myName: string = 'Name'
// myName = 28

// number
let myAge: number = 33.33
// myAge = 'Max'

// boolean
let hasHobiies: boolean = true
// hasHobiies = 1

// assign types
let myRealAge: number
myRealAge = 33
// myRealAge = '33'

// array
let hobbies: any[] = ['Cooking', 'Sports']
hobbies = [100]

// tuples
// order important for tuple
let address: [string, number] = ['Superstreet', 99]

// enum
enum Color {
	Gray,
	Green = 100,
	Blue
}

let myColor: Color = Color.Blue
console.log(myColor)
