import React from 'react';
import '../scss/main.scss';

const ShowDetail = (props) => {
  const {showItem} = props
  console.log(showItem)
    return (
      <div className="showlist-detail">
        <li className="show" id={showItem.show.id}>   
          <div className="show__content">
            <img className="show-picture"
                 src={showItem.show.image.medium} alt={showItem.show.name} 
            />

            <div className="show__content--container">
              <h1 className="show-title"> {showItem.show.name} </h1>
              <h3 className="show-subtitle"> Score: {showItem.show.rating.average} </h3>

              <span className="show__content--text"     dangerouslySetInnerHTML={{__html: showItem.show.summary}} 
              /> 

              <ul className="show__content--list">
                <span> Genres:
                {showItem.show.genres.map((genres,index) => (
                  <li key={index}             className="list-item">
                    {genres} |
                  </li> 
                ))}
                </span> 
              </ul>
            </div>
          </div>

            <img className="show__big-picture" 
                 src={showItem.show.image.original} 
                 alt={showItem.show.name} 
            />
        </li>
      </div>
    );
  }
export default ShowDetail;

// className="show__content--text"> Sinopsis: {showItem.show.summary} </span>