import React from 'react';
import './App.css';
//import OnionHater from './components/OnionHater.js';
import Destiny from './components/Destiny.js';
import cityImage from './components/CityImage.js';

function App() {
  return (
    <div className="App">
      <Destiny optionForm={cityImage}/>
    </div>
  );
}

export default App;
