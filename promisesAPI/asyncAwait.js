const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username : "sahil", email : "example.com"})
        }
        else{
            reject("ERROR : Bad Gateway");
        }
    }, 1000)
});

async function consumePromiseFive() {
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

// consumePromiseFive();


// ##################_____________________#########################

// async function getAllUser() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("E: ", error);
//     }
// }

// getAllUser();


fetch('https://api.github.com/user/sahilansari108')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log('ERROR : bad gatway'));