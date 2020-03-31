'user strict'

const fondo = document.querySelector('.fondo');

function changeColor(){

    if(window.scrollY < 350){
    fondo.classList.add('red');
    fondo.classList.remove('blue');
    fondo.classList.remove('pink');
    }

    if(window.scrollY > 350){
        fondo.classList.add('blue')
        fondo.classList.remove('red');
        fondo.classList.remove('pink');
    } 

    if(window.scrollY > 750){
        fondo.classList.remove('blue');
        fondo.classList.remove('red');
        fondo.classList.add('pink')
    }
}

window.addEventListener('scroll', changeColor);


