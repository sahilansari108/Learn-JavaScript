const superhero = ["flash", "ironman", "aquaman", "superman"];

for(const hero of superhero){
    // console.log(hero);
}

const greeting = "Hello World !"
for(let ch of greeting){
    console.log(`each character of greeting : ${ch}`)
}

// Maps

// collection of key value pair with no duplicate
const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United state of America");
map.set('Fr' , "France");
map.set('IN' , "Indonesia");

// console.log(map);

//for of loop on map

for(const pair of map){
    console.log(pair);
}

for(const [key,value] of map){
    console.log(`key : ${key} , value : ${value}`);
}


// objects 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for of loop not work with object

// for(const [key, value] of myObject){
//     console.log(key, ':-', value);
// }


