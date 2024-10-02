const object1={
    name:"Khann",
    price:2520,
    
    
    isavailable:true,
    
    orderchai:function(){
        console.log('Not available')
    }
    }
    
    Object.defineProperty(object1,'price',{
       writable:false
    })
    console.log(Object.getOwnPropertyDescriptor(object1,'price'))
    
    for (let [key, value] of Object.entries(object1)) {
        if(typeof value !== 'function') {
            console.log(`${key}:${value}`)
        }
        
    }
    
    
    
    
    