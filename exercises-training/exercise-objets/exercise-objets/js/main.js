'use strict'

const inputPassword = document.querySelector('#js-input-password')
const inputEmail = document.querySelector('#js-input-email');
const submitButton = document.querySelector('#submit-btn');
const formDetails = document.querySelector('#form-user');
const formData = {};

function setFormData(evt) {
    const inputName = evt.currentTarget.name; // va al elemento donde ha sucedido el evento y se queda con el nombre
    const inputValue = evt.currentTarget.value;

    formData[inputName] = inputValue;
    // se accede por puntos: formData.inputName
    // para añadir contenido, por corchetes.
    console.log(formData);
}

function sendData(evt){
    evt.preventDefault();
    console.log(`el nombre de mi usuario es ${formData.email} y la contraseña ${formData.password}`);
}

inputPassword.addEventListener('keyup', setFormData);
inputEmail.addEventListener('keyup', setFormData);
formDetails.addEventListener('submit', sendData);
