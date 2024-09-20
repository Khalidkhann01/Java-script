//Immediately invoked function expression
//IIFE



(function one(){
    console.log("DB is connected")  ///Nammed IFFE
})();

(()=>{console.log("DB TWO IS CONNECTED")}) ///////////arrow function IFFE
();

((name)=>{console.log(`DB is connected , ${name}`)})("Khalid")        /////////arrow function IIFE with parameters