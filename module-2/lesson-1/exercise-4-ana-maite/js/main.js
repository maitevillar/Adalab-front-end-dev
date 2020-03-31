'use strict'; 

/*const titleElement = document.querySelector('.title');
let listElement = ' Anablen';
listElement = ' Maite';

titleElement.innerHTML = titleElement.innerHTML + listElement;*/


const titleElement = document.querySelector('.title');
const listElement = document.querySelector('.nameone');

titleElement.innerHTML = titleElement.innerHTML + listElement.innerHTML + 'Maite' ;
