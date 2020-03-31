'use strict'

const input = document.querySelector(".js-input");
const img = document.querySelector("img");
const nameElem = document.querySelector(".name");
const repoElem = document.querySelector(".repositories");



function getUserName(){
    const result = input.value;
    return result;
}


function getUserInfo() {
    getUserName();
    fetch(`https://api.github.com/users/${getUserName()}`)
    .then(response => response.json())
    .then(data => {console.log(data)
        img.src = data.avatar_url;
        nameElem.innerHTML = data.name;
        repoElem.innerHTML = data.public_repos;
         });
  }

const btn = document.querySelector(".js-search");
btn.addEventListener("click", getUserInfo);

