class User{
    constructor(email,password){
    
    this.email=email
    this.password=password
    }
    get password(){
    return this._password=this._password.toUpperCase()
    }
    
    set password(value){
    return this._password=value
    }
    
    get email(){
        return this._email=this._email.toUpperCase()
        }
        
        set email(value){
        return this._email=value
        }
    
    }
    
    
    
    const umer=new User("Umi@example.com","AliBaba")
    console.log(umer.password,umer.email)