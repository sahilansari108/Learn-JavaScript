// for loop 

//table 1 to 10

// for(let i=1; i<=10; i++){
//     console.log("");
//     for(let j=1; j<=10; j++){
//         console.log(i + " * " + j +" = "+i*j);
//     }
// }

// while loop

let arr = ["flash", "ironman", "aquaman", "superman"];

// let i = 0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }


// Do While

// let score = 0;
// do{
//     console.log(`score is ${score}`)
//     score+=2;
// }while(score <= 10);


// *****************    for of loop     *******************

const superhero = ["flash", "ironman", "aquaman", "superman"];

for(const hero of superhero){
    console.log(hero);
}

const greeting = "Hello World !"
for(let ch of greeting){
    console.log(`each character of greeting : ${ch}`)
}