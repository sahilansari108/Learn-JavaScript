
// Truthy Value -> false, 0, -0, BigInt, "", null, Undefined, NaN

// Falsy Value -> all other like "0", "false", " ", [], {}


// const name = "sahil";
// if(name){
//     console.log("got user");
// }
// else{
//     console.log("user not found");
// }


const name2 = "";
if(name2){
    console.log("got user");
}
else{
    console.log("user not found");
}

const name3 = NaN;
if(name3){
    console.log("got user");
}
else{
    console.log("user not found");
}

let name4;
if(name4){
    console.log("got user");
}
else{
    console.log("user not found");
}

let name5 = " ";
if(name5){
    console.log("got user");
}
else{
    console.log("user not found");
}

