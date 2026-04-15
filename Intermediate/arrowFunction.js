// this on object 
const user = {
    userName : "sahil",
    cousePrice : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName = "sam";
// user.welcomeMessage()

// console.log(this);

//function with this
function chai(){
    let UserName = "hitesh";
    console.log(this.userName);
    console.log(this);
}
// chai();

// function expression with this
const one = function(){
    let UserName = "hitesh";
    console.log(this.userName);
    console.log(this);
}

// one();

//************************* arrow function ***************************

// synatx : () => {}


// arrow function with this
const two = () =>{
    let UserName = "hitesh";
    console.log(this.userName);
    console.log(this);
}
// two();


const add = (num1 , num2) =>{           //explicit return
    return num1+num2;
}
// console.log(add(2,8));


// const addtwo = (num1, num2) => num1 + num2;
const addtwo = (num1, num2) => (num1 + num2);   // implict return no need  to write return keyword 
// console.log(addtwo(5,6));                       // when use with paranthesis (without also) in one line 


// arrow function return object (implicit return)
const fun = () =>({userName : "sahil",
    roll : 23030108})
console.log(fun());