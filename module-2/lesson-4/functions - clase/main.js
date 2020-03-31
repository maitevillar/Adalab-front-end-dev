'use strict'

const elemWrapperCart = document.querySelector('#my-cart');
const addCartPotatoes = document.querySelector('#add-potatos');
const addCartSteaks = document.querySelector('#add-steaks');
const addCartPears = document.querySelector('#add-pears');

function increaseProductQuantity(){
    let productQuantity = parseInt(elemWrapperCart.innerHTML);
    productQuantity = productQuantity + 1;
    elemWrapperCart.innerHTML = productQuantity;
}

function displayModal(product){
    alert(`He añadido ${product} a mi cesta`)
}

function getProductName(event){
    return event.currentTarget.parentElement.id;
}

function addToCart(){
    let productName = getProductName(event)
    increaseProductQuantity();
    displayModal(productName);
}

addCartPotatoes.addEventListener('click', addToCart);
addCartSteaks.addEventListener('click', addToCart);
addCartPears.addEventListener('click', addToCart);



