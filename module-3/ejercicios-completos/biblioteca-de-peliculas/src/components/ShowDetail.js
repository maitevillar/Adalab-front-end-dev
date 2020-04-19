import React from 'react';
import '../stylesheets/App.scss';

const ShowDetail = (props) => {
  const {showItem} = props
  console.log(showItem)
    return (
      <div className="showlist-detail">
        <li className="show" id={showItem.show.id}>  
            <img className="show__picture"src={showItem.show.image.medium} alt={showItem.show.name} />
            <div className="show__content">
              <h1 className="show__content--title"> {showItem.show.name} </h1>
              <h3 className="show__content--subtitle"> Score: {showItem.show.rating.average} </h3>
              <span className="show__content--text"> Sinopsis: {showItem.show.summary} </span>
            </div>
            {/* falta el mapeo de los generos */}
            <img className="show__big-picture" src={showItem.show.image.original} alt={showItem.show.name} />
        </li>
      </div>
    );
  }
export default ShowDetail;