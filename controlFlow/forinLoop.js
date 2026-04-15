// objects 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for in loop work with object

for(const key in myObject){
    // console.log(`${key} for ${myObject[key]}`);
}

// for in loop with array

const arr = ["js", "rb", "py", "java", "cpp"];
for(const key in arr){
    // console.log(key,);
    // console.log(arr[key]);
}


// Maps

// collection of key value pair with no duplicate
const map = new Map();
map.set('IN' , "India");
map.set('USA' , "United state of America");
map.set('Fr' , "France");
map.set('IN' , "Indonesia");

// console.log(map);

//for in loop on map  : not iterable

for(const pair in map){
    console.log(pair);
}