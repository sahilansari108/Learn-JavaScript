//function

function sayMyName(){
    console.log("Sahil");
}
// sayMyName();

function add(num1, num2){      //parameter
    console.log(num1 + num2)
    return num1 + num2;
    // console.log("sahil");      // it will never printed
}

// let res = add(5, 6) // argument
// console.log(res, typeof res);


function login(userName){
    if(!userName){
        console.log("please enter a userName");
        return;
    }
    return `${userName} just logged in`
}
// console.log(login("sahil"));
// console.log(login());
// let temp = login("sahil ansari");
// console.log(temp);

function calculateCarPrice(val1, val2, ...num1){        // rest operator it bundled the remaining parameter in array
    return num1;                                
}
// console.log(calculateCarPrice(200, 400, 500, 800, 900));


const user = {
    userName : "sahil",
    coursePrice : 199
}

function handleObject(anyobject){
    console.log(`user Name is ${anyobject.userName} and price is ${anyobject.coursePrice}`)
}

handleObject(user);

handleObject({               // directly pass object as argument
    userName : "sameer",
    coursePrice : 2399,
})


const arr = [100,200,300];

function handleArray(anyArr){
    return anyArr[1];
}

// console.log(handleArray(arr));
console.log(handleArray([10,20,30,4,50]));



