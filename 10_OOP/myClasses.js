class user {
    constructor(username,email,password){
    this.username=username
    this.email=email
    this.password=password
    }
    
        encryptpassword(){
    
           return `${this.password}abc`
       }
    
        changeusername(){
            return `${this.username.toUpperCase()}`
        
        }
    
    }
    
    const user1= new user("Umer","mansurkhann@example.com",1234)
    
    console.log(user1.encryptpassword())
    console.log(user1.changeusername())
    
    ///another way without class
    
    
    function User(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    
    User.prototype.encryptpassword=function(){
        return `${this.password}abc`
    }
    
    User.prototype.changeusername=function(){
        return `${this.username.toUpperCase()}`
    }
    
    const user2=new User("Mansoor","mn@example.com",344)
    
    console.log(user2.encryptpassword())
    console.log(user2.changeusername())