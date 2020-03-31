const inputDataElem = document.querySelector('#name');
const paragraphResult = document.querySelector('#paragraph');

let theText;

function writeParagraph(){
    paragraphResult.innerHTML = inputDataElem.value;
    theText = paragraphResult.innerHTML;
    console.log('hola');
}

inputDataElem.addEventListener('keyup', writeParagraph)

