// singleton object
// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "sahil";
// console.log(tinderUser);

const regularUser ={
    email : "sahi@gmail.com",
    fullname : {
        userfullname : {
            firstname : "sahil",
            lastname : "ansari"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:'a', 2:'b'};
const obj2 = {3:'c', 4:'d'};
const obj3 = {5:'e', 6:'e'};

// const obj4 = {obj1, obj2};
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj5);

// const obj6 = Object.assign(obj1, obj2, obj3);       //everything goes on obj1 first then it copy to obj6
// console.log(obj6);
// console.log(obj1);

const obj7 = {...obj1, ...obj2, ...obj3}
// console.log(obj7);


// array of objects
const arrobj = [
    {
        id1: "abc",
        pass: "123"
    },
    {
        id2 : "def",
        pass : "456"
    }
]

// console.log(arrobj);
// console.log(arrobj[0].id1);

console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

