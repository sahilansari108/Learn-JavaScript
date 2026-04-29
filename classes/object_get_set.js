 const User = {
    _email: 'ha@hc.com',         // '_' means for private property
    _password: 'abc',

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

const tea = Object.create(User)
console.log(tea.email);
