import React, { Component } from "react";
import logo from "./PROFILE-PIC.jpg";

import "./App.css";

const titleElement = <p className="App-header-text_title"> Alex Guerrero </p>
const subtitleElement = <p className="App-header-text_subtitle"> Lunes 26 de junio de 2017 </p>
const imageElement = <img src={logo} className="App-header-logo" alt="logo" />

const extraText = <p className="App-extra_text"> Leer más...</p>
const extraNum = <p className="App-extra-like_number"> 37</p>
const extraImg = <i class="fas fa-heart"></i> 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {imageElement}
          <div className="App-header-text">
            {titleElement}{subtitleElement}
          </div>
        </header>
        <p className="App-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...
        </p>
        <div className="App-extra">
        {extraText}
        <div className="App-extra-like"> {extraNum}{extraImg}</div>
        </div>
      </div>
    );
  }
}

export default App;