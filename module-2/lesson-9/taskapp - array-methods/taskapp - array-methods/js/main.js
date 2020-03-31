'use strict';


const taskList = [];

const elementButton = document.querySelector('#new-task-button');
const elementInput = document.querySelector('#new-task-input');
const elementUlList = document.querySelector('#list-container');

function addNewTaskHandler(){
    createNewTask();
}


//Recoger el valot y meter el nuevo valor en el Array
function createNewTask(){
    if (elementInput.value !== ''){
        taskList.push(elementInput.value);
        addListElement()
        console.log(taskList)
    } else {
        alert('Introduce una tarea válida')
    }
}

//pintar una nueva tarea
function addListElement(){
    elementUlList.innerHTML += `<li><span>${elementInput.value}</span> <button type='button' class='remove-task-button'>Borrar tarea</button></li>`;
    addRemoveButtonListener();
}

function removeTaskHandler(evt){
    evt.currentTarget.parentElement.remove();
    
}

//borrar las tareas - llamar al listado de botones. Asignar un listado de funcionalidades(un addEventListener) a cada elemento con un bucle. 
function addRemoveButtonListener(){
    const elementRemoveButtons = document.querySelectorAll('.remove-task-button')
//Para cada boton de mi lista - me quedo con cada uno de ellos y les añado el addEventListener - y llamar a la funcion
for ( let singleButton of elementRemoveButtons){
    singleButton.addEventListener('click', removeTaskHandler)
    }
}


elementButton.addEventListener('click', addNewTaskHandler)


