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

// any
let car: any = 'BMW'
console.log(car)
car = { brand: 'BMW', series: 3 }
console.log(car)

// functions
function returnMyName(): string {
	return myName
}

console.log(returnMyName())

// void: nothing return from function
function sayHello(): void {
	console.log('Hello!')
}

// argument types
function multiply(value1: number, value2: number): number {
	return value1 * value2
}

console.log(multiply(2, 10))

// function types
// like delegate in C#
let myMultiply: (a: number, b: number) => number
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply
console.log(myMultiply(5, 2))

// objects
let userData: { name: string; age: number } = {
	name: 'Max',
	age: 33
}

// userData = {
// 	a: 'hello',
// 	b: 22
// }

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
	data: [100, 3.99, 10],
	output: function(all: boolean): number[] {
		return this.data
	}
}

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] }

let complex2: Complex = {
	data: [100, 3.99, 10],
	output: function(all: boolean): number[] {
		return this.data
	}
}

// union types
let myRealRealAge: number | string = 27
myRealRealAge = '27'
//
