//TARGET VS CURRENT TARGET
//current target - el elemento que está asociado al addEventListener
//Target - El elemento en el que se click-a

//EVENT BUBBLING (burbujeo de eventos en JS)

buttonElem = document.querySelector('.buttonElem');
containerInfo = document.querySelector('.container')

function buttonInfo(evt){
    console.log('click en el botón');
    evt.stopPropagation();
}

function containerInfo(evt){
    console.log('click en el container');
}

buttonElem.addEventListener('click', buttonInfo);
containerInfo.addEventListener('click', containerInfo)

//EVENT DELEGATION

function detectClass(){
    if(event.target.classList.contains('button')){
        console.log('soy el botòn');
    }else {
        console.log('NO soy el botón');
    }
}

document.addEventListener('click', detectClass)
