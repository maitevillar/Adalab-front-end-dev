import React from 'react';
import '../scss/main.scss';

function Show(props) {  
  console.log(props)
    return (
      <li className="show-item">
          <p className="show-item__subtitle"> 
             {props.status} 
          </p>
          <h4 className="show-item__title"> 
              {props.name} 
          </h4>
          <img className="show-item__picture" 
               src={props.picture} 
               alt={props.name} 
          />
      </li>
    );
}

export default Show;