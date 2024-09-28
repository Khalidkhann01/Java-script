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




const promise4=new Promise(function(resolve,reject){
    const error=true
    
    
    
    if (!error) {
        
        resolve({Username:"Khalid" , Email:"khalidkhann@example.com"})
    }
    else{
        reject("something went wrong")
    }
        },1000)
        promise4
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
    
        const promise= new Promise(function(resolve,reject){
            let error=false
            setTimeout(function() {
                
            
            if(!error){
                resolve({Language:"Java Script", Code:'112233'})
            }
            else{
                reject('JS Went Wrong')
            }
            },1000)
            })
            
            async function consumedpromise() {
                
                try {
                    const response= await promise
                console.log(response)
                } catch (error) {
                    console.log(error)
                }
            }
            consumedpromise()
        
        
            async function getallusers() {
                try {
                    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
                    const data= await response.json()             ///by async await 
                    console.log(data)
                    
                } catch (error) {
                    console.log("Error")
                    
                }
            }
        getallusers()
        
        
        
        fetch('https://api.github.com/users/hiteshchoudhary')           ///by .then method
        .then(function(response){
        
        return response.json()
        })
        .then(function(data){
            console.log(data)
        })
        .catch(()=>{
            console.log('Error')
        }).finally(function () {
            console.log("Either done or not")
            
        })
        
        
            