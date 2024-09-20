const user= {
    username: "Khalid",
    age:28,

      welcome:function (){
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }
}
user.username="Umer"
user.welcome()
console.log(this)  //////outside context it is empty object in node.

function one(){
  console.log(this)                       ////////this only work in context
}

one()

