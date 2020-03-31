'use strict'

const update = document.querySelector('#button-default');
const inputMood = document.querySelector('#mood')
const elementFace = document.querySelector('#face')
const background = document.querySelector('.page')

let actualMood;

function getRandom(min, max){
    return Math.round(Math.random() * (max - min) + min);
}


function changeStatus(){
    actualMood = inputMood.value;
    elementFace.innerHTML = actualMood;
    
    let randomNum = getRandom(0,100);
    console.log(randomNum);
    if(randomNum % 2 !== 0){
        console.log()
        background.classList.toggle('angry');
    } else {
        background.classList.remove('angry');
    }
}

changeStatus()

update.addEventListener('click', changeStatus)


