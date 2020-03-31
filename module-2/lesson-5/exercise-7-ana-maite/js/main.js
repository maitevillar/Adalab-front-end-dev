'use strict'

const buttonElem = document.querySelector('.button')

function changeColor(){
    buttonElem.classList.add('color');
}

buttonElem.addEventListener('click', changeColor)



