'use strict'

// seleccionar el elemento del HTML
const paragraph = document.querySelector('#parrafo');
const paragraphNew = document.querySelector('#parrafo-dos');

// handler (función)
function createPar() {
  paragraphNew.classList.toggle('hidden');
}

// listener sobre el elemento, con tipo de evento y handler
paragraph.addEventListener('mouseover', createPar);
paragraph.addEventListener('mouseout', createPar);

