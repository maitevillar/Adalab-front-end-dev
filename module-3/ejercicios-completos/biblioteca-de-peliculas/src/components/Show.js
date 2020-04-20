import React from 'react';
import '../scss/App.scss';

function Show(props) {  
    return (
      <li className="show-item">
          <img className="show-item__picture" src={props.picture} alt={props.name} />
          <h4 className="show-item__title"> {props.name} </h4>
          <p className="show-item__subtitle" > {props.status} </p>
      </li>
    );
}

export default Show;