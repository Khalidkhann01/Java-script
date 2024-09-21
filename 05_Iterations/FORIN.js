const myobject={
    cpp: "C++",
    JS:  "Java script",
    pyt: "Python"

}

for (const key in myobject) {
    console.log(`The key in object in for in loop is ${key}`)
        console.log(`The shortcut for ${myobject[key]} is ${key}`)
    }



    const myarray=[10,15,20,30,4,50]
    for (const key in myarray) { //console.log(key)
        console.log(`The values for keys in forin loop for arrays are ${myarray[key]}`)
        
        }
    
