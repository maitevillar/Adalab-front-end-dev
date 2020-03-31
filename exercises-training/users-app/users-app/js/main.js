'use strict';
console.log('hola')

const elemList = document.querySelector('#users-list');
const urlBase = 'https://randomuser.me/api/?results=10';
//https://randomuser.me/

let users = null;
const friends = [];

function conectToApi(){
    fetch(urlBase)
    .then(response => response.json())
    .then(data => {
        users = data.results;
        console.log(users);
        renderUsers(users);
    })
}

function renderUsers(arr){
    for(let item of arr) {
    elemList.innerHTML += `<li id='${item.name.first}' class="user-list_item"> <div class="user-list_item"> 
    <img src=${item.picture.medium}>
        <span>${item.name.first}</span>
    </div></li>` 
    }
    addClickListener();
}

function addClickListener(){
    const friendLiElements = document.querySelectorAll('.user-list_item');
    for (let userLi of friendLiElements){
        userLi.addEventListener('click', saveFavorites)
    }
}

function saveFavorites(evt){
    const index = evt.currentTarget.id;
    if(friends.indexOf(index) === -1){
        friends.push(index);
    } else {
        alert(`Este usuario ya es tu amigo`)
    }
    console.log(friends)
}

conectToApi();