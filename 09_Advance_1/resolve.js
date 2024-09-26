const promiseOne= new Promise(function(resolve,reject){


    setTimeout(() => {
        console.log('Assync task is completed')
        resolve()

    },1000);


})

promiseOne.then(function(){

    console.log("Promise is consumed")
})


new Promise(function (resolve,reject) {
    
    setTimeout(() => {
        console.log("Assync task two")
        resolve()
    }, 1000);
}).then(function(){
    console.log("Promise 2 complete")
})




const promisethree=new Promise(function(resolve,reject){

    setTimeout(()=>{

console.log("Assync three completed")

resolve({username: "Mansoor", email: "mansurkhann@example.com"})

    },1000)
})
promisethree.then(function(user){

    console.log(user)
})




new Promise(function(resolve,reject){
const error=false



if (!error) {
    
    resolve({Username:"Khalid" , Email:"khalidkhann@example.com"})
}
else{
    reject("something went wrong")
}
    },1000)
    .then(function(user){
        console.log(user)
        return user.username
    }).then(function(username){
console.log(username)

    }).catch(function(error){
        console.log(error)
    }).finally(function(){
        console.log("Error is either resolved or removed")
    })

    ///error in this