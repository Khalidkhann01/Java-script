const array=[5,9,4,8,7]
console.log(array)

array.push(1)

console.log(array)

array.shift(9)

console.log(array)



array.pop(7)
console.log(array)

const newarray=array.join()
console.log(newarray)
console.log(typeof(newarray))
console.log(typeof(array))


console.log(array.indexOf(8))
console.log(array.includes(9))
console.log(array[3])


const mynewarray= [0,1,2,3,4,5]
console.log("A  " , mynewarray)

const mn1=mynewarray.slice(1,3)

console.log("B  " , mn1)
console.log(  mynewarray)



const mn2=mynewarray.splice(0,2)

console.log("C  ", mn2)
console.log( mynewarray)