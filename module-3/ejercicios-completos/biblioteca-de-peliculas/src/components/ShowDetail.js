import React from 'react';
import '../stylesheets/App.css';

const ShowDetail = (props) => {
    console.log(props)
    return (
      <div className="show-card">
        <li className="show" id={props.pokemon.id}>
          <div className="show-image">
           
          </div>
        </li>
      </div>
    );
  }
export default ShowDetail;