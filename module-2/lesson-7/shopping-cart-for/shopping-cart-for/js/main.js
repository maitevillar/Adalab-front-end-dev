'use strict';

const button = document.querySelector('button');
const elementWrapperCart = document.querySelector('#my-cart');
const elementProductList = document.querySelector('#product-list');

const products = [
  {
    name:'Peras',
    price:3
  },
  {
    name:'Filetes de ternera',
    price:9
  },
  {
    name:'Galletas Dinosaurios',
    price:2
  },
  {
    name:'Pizza barbacoa',
    price:2.5
  }
]

for (let item of products){
  elementProductList.innerHTML += `<li> <span> ${item.name}: ${item.price}€ </span> </li>`;
}
