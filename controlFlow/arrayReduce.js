const myNumber = [1,2,3,4];
const total = myNumber.reduce(function(acc,currval){
    return acc+currval;
},5)                        // here 5 is the initial value pass to accumulator
// console.log(total);


const myTotal = myNumber.reduce((acc, currval) => (currval + acc),0);
// console.log(myTotal);


// reduce with array object

const myCart = [
    {
        courseName : "c++",
        price : 2999
    },
    {
        courseName : "java",
        price : 3999
    },
    {
        courseName : "web-Dev",
        price : 4999,
    },
    {
        courseName : "python",
        price : 1999,
    },
]

const cartTotal = myCart.reduce((acc, ele) => (ele.price + acc),0);
console.log(cartTotal); 
