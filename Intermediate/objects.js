// Object Literals

const mySym = Symbol('key1');
const mySym2 = Symbol('key2');

const JsUser = {
    name : "sahil",                     // Keys are by default treated as string
    age : 21,                           // not need to mentioned explicitly
    "full Name" : "Md Sahil Ansari",
    mySym : "my Key1",                  // mySym used  as string not symbol
    [mySym2] : "my Key2" ,                 // mysym2 used as Symbol as used inside square braceket [mySym2]
    email : "sahil&gmail.com",
    location : "roorkee",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.fullName);     // cannot be acces by .(dot) notation
console.log(JsUser["full Name"]);
console.log(JsUser.mySym , typeof (JsUser.mySym));
console.log(JsUser.mySym2);              // not accesed by . operator
console.log(JsUser[mySym2] , typeof (mySym2));


JsUser.email = "SahilAnsari@gmail.com";
console.log(JsUser.email);
// Object.freeze(JsUser);                  // it freeze the object not changes apply from now.
JsUser.email = "Sahil@gmail.com";
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}   
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello JsUser , ${this.name}`);
}   
console.log(JsUser.greeting2());
