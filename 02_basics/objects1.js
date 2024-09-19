const mysym=Symbol("Gender")
const user= {Name: "Umi",
    age:4,
    location: "Munich",
    email: "Umi@gmail.com",
    [mysym]:"Male",

}




console.log(user)
console.log(user.email)
console.log(user['Name'])
user.email="umi@microsoft.com"
console.log(user.email)
//Object.freeze(user)        /////freezes objects no further changes allowed
user.email="umi@chatgbt.com"
console.log(user.email)



user.greeting=("Hello Goodmorning")
console.log(user.greeting)

user.greeting2=(`Welcome to Chat,${this.Name}`)

console.log(user.greeting2)

console.log(typeof mysym)
