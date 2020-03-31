'user strict'

const body = document.querySelector('.body');


function PulsarTecla(event)
{
    tecla = event.keyCode;
 
    if(tecla==82)
    {
        //foto anterior
       body.classList.add('red')
       body.classList.remove('purple')
    }
    
    if(tecla==80)
    {
        body.classList.remove('red')
        body.classList.add('purple')
    } 
    
}
 
body.onkeydown=PulsarTecla;