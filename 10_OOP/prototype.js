const people=["Ali","Umer","Sahil"]

const powers= {
    umer:"Fly",
    sahil:"Kick",
    Ali:"Thunder",
    
    
    getumipower:function(){console.log(`The power of umi is ${this.umer}`)}
}


Object.prototype.mansoor=function(){
   console.log( "Mansoor is present everywhere");
}

Array.prototype.himansoor=function (){
    console.log("Mansoor says hi");
}


people.mansoor()
people.himansoor()
powers.mansoor()
powers.getumipower()
//powers.himansoor()             //////if funciton is assign to object it goes to everything(arrays,strings,objects) if it is assigned to array 
///it remains in array does not go to object.
///truelength property also trims the spaces

