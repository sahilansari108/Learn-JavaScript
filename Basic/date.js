let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let  myCreatedDate = new Date(2026,0,25);
console.log(myCreatedDate.toDateString());

let  myCreatedDate2 = new Date(2026,0,25, 4, 56);
console.log(myCreatedDate2.toString())

let  myCreatedDate3 = new Date("2026-01-25");
console.log(myCreatedDate3.toLocaleDateString());

let  myCreatedDate4 = new Date("01-14-2025");
console.log(myCreatedDate4.toLocaleDateString());


let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate4.getTime());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getTimezoneOffset());

console.log(newDate.toLocaleString('ISI',{
    weekday:"long"
}));