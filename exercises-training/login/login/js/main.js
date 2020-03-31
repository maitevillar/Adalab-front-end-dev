'use strict';

const emailInput = document.querySelector('#user-name')
const passwordInput = document.querySelector('#user-password')
const loginButton = document.querySelector('#login-button')
const errorElem = document.querySelector('#error-wrapper')

let attemps = 0;

let userEmail
let userPassword

const userInfo = {
  name:'front23',
  password:'bicicleta'
}

function storeData(){
  let userEmail = emailInput.value;
  let userPassword = passwordInput.value;
  
  if ( userEmail === userInfo.name && userPassword === userInfo.password){
    errorElem.classList.add('hidden');
    alert('Estas dentro')
  } else {  
    errorElem.classList.remove('hidden');
    attemps += 1;
  }

  if(attemps === 3){
    alert('Estas bloqueado')
  }
}


loginButton.addEventListener('click', storeData)