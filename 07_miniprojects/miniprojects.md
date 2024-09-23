# Projects related to DOM

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode)


## Project 1
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


## Project 2

```javascript


```