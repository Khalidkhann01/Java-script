const user={
    name:'Khalid',
    email:"Mansoor@gmail.com",
    isloggedin:true
    }
    
    function getuserdetails(){
    
        return console.log(`The name of user is ${this.name} Email:${this.email}`)
        console.log(this)
    }
    
    getuserdetails()
    
    
    function createuser(name,email,isloggedin){
    this.name=name;
    this.email=email;
    this.isloggedin=isloggedin
    }
    
    this.greeting = function(){
        console.log(`Welcome ${this.name}`);
        return this
    }
    
    const user2=new createuser("Mansoor","Kkhalid60@gmail.com",false)
    const user3=new createuser("Pez","Kkhalid60@gmail.com",true)   /////constructor "new" gives you new instance without altering the orignial
    console.log(user2.constructor)
    console.log(user3)
    this.greeting()