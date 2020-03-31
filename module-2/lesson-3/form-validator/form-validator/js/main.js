'use strict';

const wrapperUser = document.querySelector('#wrapper-user');
const wrapperMail = document.querySelector('#wrapper-email');
const userInput = document.querySelector('#user-name');
const emailInput = document.querySelector('#user-email');
const submitButton = document.querySelector('#submit');

const sendFormData = function() {

    let hasErrorsUsers = false;
    let hasErrorsMail = false;

    wrapperUser.classList.remove('error');
    wrapperMail.classiList.remove('error');

    if(userInput.value === ''){
        wrapperUser.classList.add('error');
        hasErrorsUsers = true;
    }

    if(emailImput.value === ''){
        wrapperMail.classList.add('error');
        hasErrorsMail = true;
    }

    if(hasErrorsUsers !== true && hasErrorsMail !== true){
        alert('Datos enviados');
    }
}

//lamo al boton
//este boton tiene que estar pendiente de un evento que yo le digo .addEventListener

submitButton.addEventListener('click',sendFormData)