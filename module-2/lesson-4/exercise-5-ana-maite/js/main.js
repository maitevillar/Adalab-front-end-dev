'use strict'; 

function getEl(a){
    return document.querySelector(a);
}

const subEl = getEl('.subtitle')
const contentSub = subEl.innerHTML;

subEl.innerHTML = 'Hola que tal';

console.log('subtitle', subEl);








    