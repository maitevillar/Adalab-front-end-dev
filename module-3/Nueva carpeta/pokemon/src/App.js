import React from 'react';
import './stylesheets/App.css';
import pokemon from './pokemon.js';
import PokeList from './components/PokeList.js'



const App = (props) => {
  console.log(pokemon);
    return (
        <div className="App">
          <PokeList dataList={pokemon}/>
        </div>
      );
}

export default App;
