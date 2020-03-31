'use strict'

// seleccionar el elemento del HTML
const button = document.querySelector('.btn');

// handler (función)
function changeContent() {
  return button.innerHTML = '¡ole yo y la mujer que me parió!';
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', changeContent);