import React from 'react';
import '../stylesheets/App.css';

const ShowDetail = (props) => {
  const {showItem} = props
  console.log(showItem)
    return (
      <div className="show-card">
        <li className="show" id={showItem.show.id}>  
          <div className="show-image">
            <img src={showItem.show.image.medium} alt={showItem.show.name} />
            <h1> {showItem.show.name} </h1>
            <h3> Score: {showItem.show.rating.average} </h3>
            <span> Sinopsis: {showItem.show.summary} </span>
            {/* falta el mapeo de los generos */}
            <img className="big-image" src={showItem.show.image.original} alt={showItem.show.name} />
          </div>
        </li>
      </div>
    );
  }
export default ShowDetail;