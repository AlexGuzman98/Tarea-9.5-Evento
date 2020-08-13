let azul = 'blue';
function changeColor(event){  
  if (azul == 'red'){
    event.currentTarget.style.backgroundColor = 'red'; 
    azul = 'blue'}
  else{
    event.currentTarget.style.backgroundColor = 'blue';
    azul = 'red'
  }
}
let elements = document.querySelectorAll('div');
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener('click', changeColor);
}

