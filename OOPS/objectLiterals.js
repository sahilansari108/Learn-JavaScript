const user = {
    username : "sahil",
    loginCount : 12,
    signedIn : true,

    getUserDetails : function(){
        console.log("got user details from DB");
        console.log(`username : ${this.username}`)
        console.log(this);
    }

}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


// ************************************************************
// Constructor Function

function USER2 (username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = USER2("sahil", 12, true);
// const userTwo = USER2("satyam", 13, false);

const userOne = new USER2("sahil", 12, true);
const userTwo = new USER2("satyam", 13, false);

console.log(userOne);
console.log(userTwo.greeting());
console.log(userOne.constructor);


// when use new keyword and empty object created and then data added on it(constructor call), then this data added