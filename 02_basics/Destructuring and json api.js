const course={
    name:"Javascript",
    price: 999,
    instructor:"XYX"
}

const {instructor:ins}=course        ////destructing object...curly braces are used to do it

console.log(ins)


const {price:RS}=course
console.log(`the price for this course is ${RS}`)




//{"Name": "Khalid"
//"Course":"Web development"                    json apis are like objects without names
//"Price" : "450$"
//} 

//[
//{},
//{},                                             in type of arrays with multiple empty nameless objects
//{},]


