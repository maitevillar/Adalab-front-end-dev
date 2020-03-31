'use strict'

// seleccionar el elemento del HTML
const userName = document.querySelector('#fullName');
const button = document.querySelector('#btn');

let userNameContent;


// handler (función)
function displayConsole() {
  userNameContent = userName.value;
  event.preventDefault();
  console.log(`Hola ${userNameContent}`);
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', displayConsole);


