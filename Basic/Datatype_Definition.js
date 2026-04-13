// Primitive
// 7 types : String, Number, Boolean, nul ,undefined, Symbol, BigInt


// Reference (Non Primitive)
//Array, Objects, Functions

// JavaScript is Dynamically typed because variable are defined on run time.


//symbols

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);
console.log(id === anotherId);

const bigNumber = 34568945124n;
console.log(bigNumber , typeof bigNumber)


//Array

const heros = ["Ironman", "Thor", "captain America"];
console.log(heros);


//Objects
let myObj = {
    name: "sahil",
    age: 22,
}
console.log(myObj);
console.log(myObj.name, myObj.age);

const myFunction = function(){
    console.log(myObj.name, myObj.age)
}
myFunction();

console.log(typeof myFunction);