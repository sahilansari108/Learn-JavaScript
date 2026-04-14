let a = 100;
const b = 200;
var c = 300;
var d = 400;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    d = 40;
}


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


function one(){
    const userName = "sahil";

    function two(){
        const website = "youtube";
        console.log(userName);
    }
    // console.log(website);
    console.log("one");
    two();
}

// one();


if(true){
    const username = "sahil";
    if(username === "sahil"){
        const website = " youtube";
        // console.log(username + website);
    }
    // console.log(website);

}


// ############ Interesting ############

console.log(addOne(5));       // hoisting
function addOne(num){
    return num+1;
}
// console.log(addOne(5));


// console.log(addTwo(5));     // cannot access before initialization
const addTwo = function(num){
    return num+2;
}
console.log(addTwo(5));
