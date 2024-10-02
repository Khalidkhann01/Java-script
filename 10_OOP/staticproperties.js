class user {
    constructor(username){
        this.username=username
    }
    logme(){
        console.log(`Username:${this.username}`)
    
    }
   

    static createid(){                //////it stops anything from inheriting and using
        console.log("123")
    }

  
    }



class teacher extends user {
    constructor(username,email){
        super(username)
        this.email=email
    }
}



const user1=new user("Sab")
const user2=new teacher("Khalid","223@example.com")

user1.logme()
user2.logme()



