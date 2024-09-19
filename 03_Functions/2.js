function shoppingcart(...sahil){

    return sahil

}


console.log("THe shopping cart is",shoppingcart(200,300,400))


/// array in objects//


const user={
    name:"Khalid",
    class:2,
    Price:50000
}

const user2={
    name:"Sahil",
    class:3,
    Price:10000
}

function handleObject(anyobject){
    console.log(`the name is ${anyobject.name} and the price is ${anyobject.Price}`);}

handleObject(user)
handleObject(user2)

////functions in arrays


const myarray=[2,300,400,500,600,800,900]

function array(getarray){
    return getarray[3]
}

console.log(array(myarray))