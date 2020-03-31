'use strict';

const userNameElem = document.querySelector('#user-name');
const userEmailElem = document.querySelector('#user-email');
const submitButton = document.querySelector('#submit-btn');
const userNameResult = document.querySelector('#user-name-result');
const userEmailResult = document.querySelector('#user-email-result');
const userDetailsForm = document.querySelector('#user-details');


const legalSpanElem = document.querySelector("#legal-span");
const legalTextElem = document.querySelector("#legal-text");

let userName;
let userEmail;

function updateUserInfo(){
    userNameResult.innerHTML = userNameElem.value;
    userEmailResult.innerHTML = userEmailElem.value;

    userName = userNameResult.innerHTML;
    userEmail = userEmailResult.innerHTML;
    console.log('hola')
}

function sendUserInfo() {
    event.preventDefault();
    console.log(`Estoy mandando al server ${userName} y ${userEmail}`);
}

function showHiddenInfo(){
    legalTextElem.classList.toggle('hidden');
}

userNameElem.addEventListener('keyup', updateUserInfo);
userEmailElem.addEventListener('keyup', updateUserInfo);

submitButton.addEventListener('click', sendUserInfo);

legalSpanElem.addEventListener('mouseover', showHiddenInfo)
legalSpanElem.addEventListener('mouseout', showHiddenInfo)


//classList - propiedades de la clase - add/hidde/remove/