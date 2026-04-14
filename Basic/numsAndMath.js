const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const num = 53.58566;
console.log(num.toPrecision(3));
console.log(num.toFixed(3));


const hundreds = 2000000;
console.log(hundreds.toLocaleString('en-IN'));


// ******************** Maths *************************

console.log(Math);
console.log(Math.abs(-4.665));
console.log(Math.floor(3.25));
console.log(Math.ceil(4.23));
console.log(Math.round(4.65));
console.log(Math.min(45,65,78,12,19));
console.log(Math.max(45,98,65.45));

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);
console.log(Math.floor(Math.random()*20) + 1);

console.log(Math.random().toFixed(2)*10+1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
