'use strict'; // Siempre comenzar con esto para que me cpate errores

//console.log('hola'); Para saber si esta funcionando correctamente (Mirar en la consola en devtools)

const nameElem = document.querySelector('#name');
const titleElem = document.querySelector('#title');

let studentName ='elvira';

nameElem.innerHTML = studentName + ' <span class="surname">Perez</span>';
titleElem.classList.add('blue'); // añadir y quitar clases

console.log(nameElem);

// nameElem = document -- para llegar al documento
//usar un let 
//usar un cont
//como acceder a las etiquetas
