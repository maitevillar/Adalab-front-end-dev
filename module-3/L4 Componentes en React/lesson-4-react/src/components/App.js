import React from 'react';
import '../style/App.css';
import ItemList from'./ItemList.js';

//1. La variable global de ItemList se declara aquí (dirige la orquestra)
//2. El componente que que guarda el "cacho"

const items = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    //quantity: 2,
    category: 'Cereales',
    price: 5
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5
  }

]



const App = props => {
  return (
    <div className="App">
      <ItemList products={items}/>
    </div>
  );
}

export default App;
