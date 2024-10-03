const User={
    _email:"sab@example.com",
    _password:"123abcsdef",



    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        _email=value
    }
}

const mansoor= Object.create(User)
console.log(mansoor.email)