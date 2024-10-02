//## Inheritance##


const user={
    username: 12345,
    email:"mk@example.com"
}
const teacher= {
    name:"Khalid",
    course:"English"
}

const teachingsupport={
isavailable:true
}


const assistant={
    isavailable:false,
    __proto__:teachingsupport


}

teacher.__proto__=user


Object.setPrototypeOf(assistant,teacher)


let anotheruser= "Mansoor      "


String.prototype.TrueLength=function(){
    console.log(`${this}`)

    console.log(`The true length is ${this.trim().length}`)

}

anotheruser.TrueLength()

"Sahil    ".TrueLength()
"Umer          ".TrueLength()