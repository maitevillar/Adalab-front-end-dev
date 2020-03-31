import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(<App />, document.getElementById("root"));



// Será el único en el que carguemos ReactDOM y se encarga de acceder a un nodo del DOM (el div que antes identificamos como root) e importar y pintar el componente principal de la aplicación, en este caso, llamado Ap