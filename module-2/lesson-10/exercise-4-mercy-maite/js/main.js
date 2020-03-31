'use strict'

const input = document.querySelector(".js-input");
const img = document.querySelector("img");
const listElem = document.querySelector(".repositories");



function getUserName(){
    const result = input.value;
    return result;
}


function getUserInfo() {
    getUserName();
    fetch(`https://api.github.com/orgs/${getUserName()}`)
    .then(response => response.json())
    .then(data => {console.log(data)
        reposAdress = data.repos_url;
         });
  }

function getUserList(){
    fetch("https://api.github.com/orgs/Adalab/repos")
    .then (response => response.json())
    .then(data => {console.log(data)
        const lista = data.name;
        console.log(lista)
         });
}

const btn = document.querySelector(".js-search");
btn.addEventListener("click", getUserList);

