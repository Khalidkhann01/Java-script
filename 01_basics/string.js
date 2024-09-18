let name='Mansoor'
let value='50 '


console.log(`my name is ${name} and the value is ${value}`)

const newstring=String ("Mansoor")
console.log(newstring[5])

console.log(newstring.__proto__)

console.log(newstring.indexOf('o'))
console.log(newstring.charAt(3))

const anotherstring=newstring.substring(0,5)
console.log(anotherstring)

const onemore=newstring.slice(-4,1)
console.log(onemore)


console.log(newstring.length)
console.log(newstring.toUpperCase())

const substring=newstring.substring(0,6)
console.log(substring);

const split=String (`Mansoor_KHan_hello`)

console.log(split);

console.log (split.includes("hello"))
console.log(split.replace("hello"),("20"))

console.log(split.split("_"))
