'use strict'



const inputFilm = document.querySelector('#form');
//const inputFilm2 = document.querySelector('#form2');
const button = document.querySelector('#button');


let arr = [];
const arr = filmName;

function filmList(){
    event.preventDefault();
    filmName[0] = inputFilm.value;
    filmName2[1] = inputFilm.value;
    console.log(filmName);
    for (let item of filmName){
        console.log(`A mi también me gusto ${item}. Tenemos mucho en común`)
    }
}

button.addEventListener('click', filmList)



1