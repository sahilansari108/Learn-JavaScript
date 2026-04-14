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
console.log(login("sahil"));
console.log(login());
let temp = login("sahil ansari");
console.log(temp);