const myArr =  [0, 2, 55, 654, 7, true, "sahil"]
console.log(myArr);
console.log(myArr[4]);

const arr = [1,2,3,4,5];
console.log(arr);

//Array methods

arr.push(6);
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr.pop());
arr.unshift(9);         // add ele at begining
console.log(arr);       
arr.shift();            // remove first element
console.log(arr);

console.log(arr.includes(5));
console.log(arr.indexOf(90));

const newArr = arr.join();
console.log(arr);
console.log(newArr, typeof newArr);



// ***********  slice And Splice ******************
let numsArr = [0,1,2,3,4,5];
console.log("original array : ", numsArr);

let sliceArr = numsArr.slice(1,4);
console.log("slice Array : ", sliceArr);
console.log("original array after slice: ", numsArr)

let spliceArr = numsArr.splice(1,4);
console.log("splice Array : ", spliceArr);
console.log("original array after splice: ", numsArr)

// slice just return a subarray excluding the last index
//splice remove and return the elements of index specified including the last index



let spliceArr2 = numsArr.splice(0,1,1,2,3);
console.log("splice Array 2 : ", spliceArr2);
console.log("original array after splice 2: ", numsArr);

//this splice(a, b, c,d..) means start from index a remove b no. of element with elements c,d,e....

