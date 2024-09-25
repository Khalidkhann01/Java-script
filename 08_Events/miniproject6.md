## Press any key to print its Key code and code key

```JavaScript


console.log('Project 5');

insert=document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
insert.innerHTML=`<div class='color'>
<table>
<tr>
  <th>Key</th>
  <th>Key Code</th>
  <th>code</th>
</tr>
<tr>
  <td>${e.key===""? "Space":e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>

</table>
</div>`












})















``