const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumber.map( (num) => (num + 10)) // implicit return of arrow function
// console.log(newNums);

const newNums1 = myNumber.map( (num) => {return num + 15})
// console.log(newNums1);

//chaining
const newNums2 = myNumber.map( (num) => (num+2)).map( (num) => (num+4))   //first map array(but not store on newNums2) made then second map apply
// console.log(newNums2);

const newNums3 = myNumber.map( (num) => num*7).filter((val) => val>=35)   // we can add more method through chaining
console.log(newNums3);

