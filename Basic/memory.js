// Stack memory (primitive Datatype)
// heap memory (Non-Primitive Datatype)


let name = "MdSahil";
let anotherName = name;
anotherName = "Naushad";

console.log(name);
console.log(anotherName);

// in stack different reference(variable / space) is created for each variable


let userOne = {
    email : "user@gmail.com",
    password : "12456987",
}

let  userTwo = userOne;

userTwo.email = "sahil@gmail.com";
console.log("userOne Email : ",userOne.email);
console.log("userTwo Email : ",userTwo.email);


// in heap only one reference is created for each object