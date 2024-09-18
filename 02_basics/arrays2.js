const array1= ["khalid","Sahil","yasir"]
const array2= ["umer","Ali"] 

//array2.push(array1)///// push method adds array as an element into the array
//console.log(array2)//

let array3=array1.concat(array2)   ///concat method adds an array into array
console.log(array3)

let array4= [...array1,...array2]   ///spread method array into array
console.log(array4)



console.log(Array.from("khalid"))



const array5=[1,2,3[3,1],[4,5],5,6,[8,9]]

const array6=array5.flat(7);
console.log(array6)