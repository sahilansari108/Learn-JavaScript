
class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new user("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());

user.prototype.changePassword = function(){
    return `${this.password}xyx`
}
console.log(chai.changePassword());