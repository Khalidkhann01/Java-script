function add(number1,number2){
    return number1+number2

}


console.log("Result is :",add(55,95))




function justloggedin(username){
    if(username===undefined){
        return console.log("Please enter a valid username")}
    return console.log(`${username} just logged in`)
}
justloggedin()