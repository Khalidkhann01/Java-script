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


    