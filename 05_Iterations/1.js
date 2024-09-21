////for each on normal array



const myarray=[200,300,400,500,600]

function printme(item){           ////can give anyname to it item val whatever you like in funcition

    console.log(item)
}

myarray.forEach(printme)           /////by declaring function before foreach


myarray.forEach((key)=>{console.log(key)}) /////by arrow functino inside foeachloop

myarray.forEach(function print(value){console.log(value)})  // by normal function



//////for each on array with strings

const array2=["JavaScript","Java","Python","C++"]

function printme2(umar,ali,sahil){console.log(umar,ali,sahil)}                 //////key,index,full array


array2.forEach(printme2)


////////for arrays with objects inside


const array3=[{
    languagename: "C++",
    languagelevel:1
},
{
languagename: "Java",
languagelevel:2
},
{
languagename: "Python",
languagelevel:3
}
]

array3.forEach((item)=>{(console.log(`The language name is ${item.languagename} and the language level is ${item.languagelevel}`))})
