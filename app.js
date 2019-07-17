var myName = 'Name';
// myName = 28
// number
var myAge = 33.33;
// myAge = 'Max'
// boolean
var hasHobiies = true;
// hasHobiies = 1
// assign types
var myRealAge;
myRealAge = 33;
// myRealAge = '33'
// array
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
// tuples
// order important for tuple
var address = ['Superstreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void: nothing return from function
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
// function types
// like delegate in C#
var myMultiply;
// myMultiply = sayHello
// myMultiply()
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Max',
    age: 33
};
// userData = {
// 	a: 'hello',
// 	b: 22
// }
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
