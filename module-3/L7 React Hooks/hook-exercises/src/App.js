import React, { useState } from 'react';
import Older from './conponents/Older.js'
import app from './App.css'

// *name* es una variable que contiene el valor del estado y *setName* es una función para modificar ese estado respectivamente. El valor que enviamos como argumento de *useState* es el valor por defecto o valor inicial para *name*, el equivalente a *this.state = { name: 'Elena' }*


const App = () => {
  const [count, setCount] = useState(20);
  const [countgift, setCountgift] = useState(1);

  const sumOne = () => setCount(count + 1);
  const sumOneGift = () => setCountgift(countgift + 1);

  return (
    <div className="App">
      <Older olderNumber={count} giftNumber={countgift} getOlder={sumOne} getMoreGifts={sumOneGift} />
    </div>
  )
}

export default App;