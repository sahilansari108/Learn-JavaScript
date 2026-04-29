class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username  is ${this.username}`);
    }

    static createId(){      // stop inheritance
        return `123`
    }
}

const sahil = new User('sahil')
// console.log(sahil.createId());

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email = email;
    }
}

const sahjad = new Teacher('sahjad','sahjad@gmail.com');
sahjad.logMe();
// console.log(sahjad.createId());