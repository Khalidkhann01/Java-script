class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`${this.username} logged in`)
    }
}


class teacher extends user  {                                           ////extends same like __proto__ to inherit properties of the other
    constructor(username,email,password){
        super(username)                                              ////super is same like .call
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`${this.username} added a new course`)
    }


}


const student=new user("Sab")
student.logme()

const instructor=new teacher("Khalid","Khalid@example.com",12344)
instructor.logme()
instructor.addcourse()

console.log(student===instructor)
console.log(student instanceof user)
console.log(instructor instanceof user)
console.log(instructor instanceof teacher)
console.log(student instanceof teacher)