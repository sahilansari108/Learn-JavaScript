function SetUsername(username){
    this.username = username;
}

function creatUser(username, email, password){
    // SetUsername(username); not working not call to set just call
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const temp = new creatUser("chai", "chai@google.com", "123");
console.log(temp);