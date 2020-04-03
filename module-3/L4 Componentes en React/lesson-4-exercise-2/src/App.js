import React from 'react';
import './App.css';
import HalfPage from './components/HalfPage.js';

function App() {
  return (
    <div className="App">
      <HalfPage> 
          <h1> Hola </h1>
          <p> Hola quetal</p>
      </HalfPage>
      <HalfPage> 
          <h1> Que tal </h1>
          <p> Buenos dias</p>
      </HalfPage>
    </div>
  );
}

export default App;
