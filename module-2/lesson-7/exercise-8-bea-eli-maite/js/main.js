'user strict'

const buttons = document.querySelectorAll('.button');
buttons[0].innerHTML = 'soy el primer botón';


console.log(buttons.length);

function changeColor(){
    document.querySelector('.wrapper').classList.toggle('background');
}

for (const item of buttons){
    item.addEventListener('click', changeColor);
}

