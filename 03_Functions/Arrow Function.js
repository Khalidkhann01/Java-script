const one=(number1,number2)=>{
    return number1 + number2                   ///////////explicit return//return is used when its wrapped in curly braces
}

console.log(one(55,55))


const two=(number1,number2)=> (number1+number2)           ////////implicit return ///single line return///without return keyword

console.log(two(1,2))



const object={
    name:"Khalid",
    username:112233
}
const four=(number1,number2)=> ({object})

const three=(number1,number2)=> ({username:"Mansoor"})           ////////because to returns object we need curly brace so we should wrap it up in brackets

console.log(three(),four())