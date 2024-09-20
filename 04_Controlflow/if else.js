const userisloggedin=true
const userhascreditcard=true
const loggedinfromgmail=true
const loggedinfromemail=true
const guest=true


if(userisloggedin && userhascreditcard){                   ///// && and operator
    console.log("Allow for shopping")
}
else{console.log("Please login and enter your credit card details for shopping")};

if(loggedinfromemail || loggedinfromemail){
    console.log("Welcome to BK mart")                         //|| or operator
}; 
if(guest){
    console.log("Kindly register to purchase")
}
