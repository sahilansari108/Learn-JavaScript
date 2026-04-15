// Nullish coalescing operator (??) : null / undefined

let val = 5??10;
console.log(val);

let val1 = null??10;
console.log(val1);

let val2 = undefined??10;
console.log(val2);

let val3 = null ?? 10 ?? 20;
console.log(val3);

let val4 = ""?? 10;
console.log(val4);
