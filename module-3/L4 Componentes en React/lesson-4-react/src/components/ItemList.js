import React from 'react';
import Item from './Item.js';


// Va a recibir props que va a ser un array de elementos.

const ItemList = (props) => {
    return (
        <ul>
            {props.products.map((items) => 
            <Item 
                quantity={items.quantity}
                name={items.name}
                description={items.description}
                category={items.category}
                price={items.price}
            />)}
        </ul>
    )
}

export default ItemList;