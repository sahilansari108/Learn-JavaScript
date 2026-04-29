class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const sahil = new Teacher('sahil','sahil@gmail.com', '123');
sahil.addCourse();
sahil.logMe();

const satyam = new Teacher('sahil','sahil@gmail.com', '123');

console.log(sahil === satyam);

console.log(sahil instanceof User);

console.log(sahil instanceof Teacher);