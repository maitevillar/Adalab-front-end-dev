'use strict'

const img = document.querySelector("img");

function getDogImage() {
  fetch("https://dog.ceo/api/breed/chihuahua/images/random")
    .then(response => response.json())
    .then(data => {img.src = data.message; });
  }

const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

