///Call and This

function setusername(username){
    this.username=username
    console.log("Called")
    
}

function createuser(username,email,password){

setusername.call(this,username)          ////////.call
this.email=email
this.password=password
}

const user2=new createuser("Khalid","khalid@example.com",1234)

console.log(user2)