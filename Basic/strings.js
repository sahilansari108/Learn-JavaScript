const name = "sahil ";
const repoCount = 5;
console.log(name + repoCount + " value");  // not better

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

console.log(name);
console.log(name[2]);


const gameName =  new String("sahil");     // best way to define Strings
console.log(gameName);
console.log(gameName[2]);

console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(1,3);
console.log(newString);


const newName = gameName.slice(-5,3);
console.log(newName);


const name2 = "    Sahil    ";
console.log(name2.trim());       // remove starting and ending Whitespace


const url = "https://hitesh.com/hitesh%20chaudhary";
console.log(url.replace('%20','-'));                    //replace %20 with -
console.log(url.includes('sundar'));        //check sundar is present on url or not


const name3 = "md-sahil-ansari";
console.log(name3.split('-'));      // convert into array(split) based on '-' present