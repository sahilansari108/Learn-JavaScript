// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve();
//     },1000)
// });
// promiseOne.then(function(){
//     console.log("promise consumed");
// });



// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("sahil");
//         resolve();
//     },1000);
// }).then(function(){
//     console.log("done");
// })


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({user : "sahil" , email : "example.com" , id : "145612"});
    })
}).then(function(user){
    console.log(user);
})