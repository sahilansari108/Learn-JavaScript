"use strict";
let num = 5;     //number
let bignum = 4568971325678954648;
let str = "sahil";
let flag = true;
let nothing  = null;    // Bollean 
let undef;
let special = Symbol("userId");
let special2 = Symbol("userName");

console.table([num, bignum, str, flag, nothing, undef, special, special2]);
console.table([typeof(num), typeof bignum, typeof str, typeof flag, typeof nothing, typeof undef, typeof
    special, typeof special2
]);

console.log(special == special2);