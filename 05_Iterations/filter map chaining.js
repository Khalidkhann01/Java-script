const numbers=[1,2,3,4,5,6,7,8,9,10]

const newnumbers= numbers
                          .map((num)=> num*5)
                          .map((num)=> num+1)
                          .filter((num)=> num >20)
console.log(newnumbers)                             