const mynumbers =[1,2,3]

const sum= mynumbers.reduce(function(acc,currval){
    console.log(`acc: ${acc},current: ${currval}`)
    return acc+ currval
    
},0)
const sum2= mynumbers.reduce((acc,curval)=> acc+curval,0)
console.log(sum2)





const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const sum3= shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(sum3)