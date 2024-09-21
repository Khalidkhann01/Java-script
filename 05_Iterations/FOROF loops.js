let greetings="HEllo world how are you"

for (const greet of greetings) { console.log(`Value is ${greet}`)
    
}


const myarray=[10,15,20,30,4,50]
for (const num of myarray) { console.log(`The key of array is ${num}`)
    
}


const map= new Map()
map.set("IN","India") 
map.set("US","America") 
map.set("PK","Pakistan")           //////MAP is an object it holds unique values no repeat in it   .
console.log(map)


for (const [key,values] of map) {
    console.log(`${key}::${values}`)
}