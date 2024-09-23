# Projects related to DOM

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode)


## Project 1 : Change Background Color
```javascript
const buttons=document.querySelectorAll('.button')
console.log(buttons)
const body=document.querySelector('body')

buttons.forEach(function(color){
color.addEventListener('click',function clicked(leftclick){

if(leftclick.target.id==='grey'){
  body.style.backgroundColor=leftclick.target.id
}

if(leftclick.target.id==='white'){
  body.style.backgroundColor=leftclick.target.id
}

if(leftclick.target.id==='blue'){
  body.style.backgroundColor=leftclick.target.id
}

if(leftclick.target.id==='yellow'){
  body.style.backgroundColor=leftclick.target.id
}
})
})


```


## Project 2 BMI Calculator

```javascript

const form=document.querySelector('form')

form.addEventListener('submit',function(e){

  e.preventDefault();

  const height= parseInt(document.querySelector('#height').value);
  const weight= parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML="Please enter a valid height"
  }
  else if(weight===""|| weight<0 || isNaN(weight)){
    results.innerHTML="Please enter a valid height"}
  
else{
  const bmi=(weight / ((height * height) / 10000)).toFixed(2);

  results.innerHTML=`<span>${bmi}</span>`
}
})


```