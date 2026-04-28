// ADD a prototype method

let myName ="hitesh        ";
String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}
myName.truelength();
"sahil".truelength();
"Sahil Ansari     ".truelength();

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "suit",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sahil = function(){
    console.log("sahil is present in all object")
}

Array.prototype.hiSahil = function(){
    console.log("sahil hii");
}

// .sahil() is for object(i.e main parent) so apply to all.
myHeros.sahil();
heroPower.sahil();

myHeros.hiSahil();
// heroPower.hiSahil();  -> not work as hiSahil is for array only


//*********************###################*********************

// inherit of object property
const user = {
    userName : "sahil",
    email : "example@gmail.com"
}
const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'Js Assignment',
    fullTime : true,
    __proto__:TeachingSupport      // helps access property of TeachingSupport 
}

teacher.__proto__ = user;   // teacher inherit the property of user

Object.setPrototypeOf(TeachingSupport, teacher) ; 

// TeachingSupport inherit the property of teacher

