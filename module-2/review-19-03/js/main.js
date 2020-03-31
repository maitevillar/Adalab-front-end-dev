'use strict';

const urlBase = 'https://ghibliapi.herokuapp.com/films';
const ulElem = document.querySelector('.movie-list');
const favElem = document.querySelector('.favourites');

//BASIC
//Al iniciar mi app me conectaré a la URL de studio Gibli ---->  https://ghibliapi.herokuapp.com/films
//Pintaré el título y la sinopsis de la película
//Al pinchar en cada uno de los li este se añadirá a mi lista de pelis vistas, que estará guardada en localstorage
//Mi lista de pelis favoritas pintará solamente el título de cada peli //y botón para borrar

let movieList = null;
const selectedMovies = readLocalStorage();// lee el retorno que devuelve local storage

function loadMovies(){
    fetch(urlBase)
      .then(response => response.json())
      .then(data => {
        movieList = data;
        console.log(movieList)
        renderList(movieList); 
        renderFavourites(selectedMovies); 
      })
  }

  function renderList(movieArr){
    for(let movie of movieArr) {
      ulElem.innerHTML +=  `<li id="${movie.id}" class='movieList-movie_item'> <p class='main-title'>${movie.title}</p><p>${movie.description}</p></li>`
      addClickListeners();
    }
  }

// cada vez que haga click se me guarda la información
// 0. Hacer los listeners para que detecte que estas pinchando encima:

function addClickListeners(){
    const liListElements = document.querySelectorAll('.movieList-movie_item');
    for (let li of liListElements){
        li.addEventListener('click', selectMovie)
    }
}

// 1. Guardar información // Siempre en string jason

function setLocalInfo(){ //set-guardar
    localStorage.setItem('moviesInfo', JSON.stringify(selectedMovies));
   }

function readLocalStorage(){ //leer
    let localInfo = JSON.parse(localStorage.getItem('moviesInfo'));
    if(localInfo !== null){
      return localInfo;
    } else {
      return localInfo = [];
    }
 }
 
 function selectMovie(evt){
     const selected = evt.currentTarget.id;
     console.log(selected);
     selectedMovies.push(selected);
     setLocalInfo();
     renderFavourites(selectedMovies);
 }


 // función que se quede con el id del objeto

 function getMovieObj(id){
     return movieList.find(movie => movie.id === id)
     
     //le paso el objeto que itera(id) - si es igual que lo que le paso por el parametro me devolvera
 }

 // funcion que pinte el contenido del objeto relacionado con el id

 function renderFavourites(favArr){
    favElem.innerHTML= '';
    for (let favourite of favArr){
      console.log(favArr)
        const object = getMovieObj(favourite);
        console.log(object)
        if(favourite === object.id){
            favElem.innerHTML += `<li id=${object.id}><button> borrar </button><p>${object.title}</p></li>`
        }
    }
 }

 function addFavouriteListeners(){
     const buttonList = document.querySelectorAll('button');
     for (let button of buttonList){
         button.addEventListener('click', removeMovie)
     }
 }

 function removeMovie(evt){
  const elemId = evt.currentTarget.parentElement.id;
  const elemIndex = selectedMovies.indexOf(elemId);// aqui tenias idexOf
  selectedMovies.splice(elemIndex,1);
  setLocalInfo();
  renderFavourites(selectedMovies);
}

loadMovies();


