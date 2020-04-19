import React from 'react';
import '../stylesheets/App.scss';

function Show(props) {  
    return (
      <li className="show-item">
          <img src={props.picture} alt={props.name} />
          <h4> {props.name} </h4>
          <p> {props.status} </p>
      </li>
    );
}

export default Show;