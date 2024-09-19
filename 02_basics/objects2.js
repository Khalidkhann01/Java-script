const user={}

user.name="Ali"
user.age=11
user.class=4
user.id=12112



const userdetails= { email:"alinasir@gmail.com",
    fullname: {
        Firstname: "Muhammad",
        middlename: "Ali",
        lastname: "Nasir"
    }
}

const more={
    gender: "Male",
    details:{favcolor:"black",
        favsports:"football",
        favplayer:"Ronaldo"
    }
}



console.log(user)
console.log(userdetails)
console.log(more)

console.log(userdetails.fullname.Firstname)

console.log(more.details.favplayer)



const obj1={1:"3",2:"4"
}
const obj2={3:"43",5:"6"
}

const obj3={...obj1,...obj2}

console.log(obj3)


