let date= new Date()
console.log(date)
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());



let mycreateddate=new Date("2024,2,8")
console.log(mycreateddate.toDateString())

let mytimestamp= Date.now()
console.log(mytimestamp)

console.log(mycreateddate.getTime())

console.log(Math.floor(Date.now()/1000))

console.log(mycreateddate.getDate())
console.log(mycreateddate.getHours())
console.log(mycreateddate.getMinutes())