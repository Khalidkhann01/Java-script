/*for (let i = 0; i <=5; i++) {
    const element = i;
    console.log(`outer loop value is ${i}`)
    for (let j = 0; j <= 5; j++) {
        const element = j;
        console.log(`Inner loop value is ${j}`)
   }
    
}*/



for (let i = 1; i <=5; i++){
    const element = i
    console.log(`The Value of outer loops is ${i}` )
for (let j = 1; j <=10; j++) {

    console.log(i, "x", j ,"=",i*j)
    
    
}
}


for (let index = 1; index <=10; index++) {
    const element = index;
    if(index===5){(console.log("5 is detected"))
        break
    }
                                                               //////////break stop the loop
        console.log(`The value of i is ${index}`)
    
}








for (let index = 1; index <=10; index++) {
    const element = index;
    if(index===5){(console.log("5 is detected"))
        continue
    }
                                                               //////////continue ignore 1time
        console.log(`The value of i is ${index}`)
    
}