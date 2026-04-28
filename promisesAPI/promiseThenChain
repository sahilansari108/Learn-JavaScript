const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({username : "sahil", email : "sahil@gmail.com"});
        }
        else{
            reject("ERROR : Bad Gateway");
        }
    },1000);
})
promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then((username) => {
    console.log(username);
})
.catch((error) => {
    console.log(error);
})
.finally(()=> console.log("finally completed"));