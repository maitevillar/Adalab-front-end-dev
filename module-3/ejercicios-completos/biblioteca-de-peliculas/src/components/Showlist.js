import React from 'react';
import '../stylesheets/App.scss';
import Show from './Show';
import { Link } from 'react-router-dom';

const Showlist = (props) => {
    const {dataList, isRunning} = props
  
    return (
    <div className="content-container">
        <h1> Buscador de series </h1>
      <ul className="showlist-container">
         {dataList
         .filter(dataObj => !isRunning || (isRunning && dataObj.show.status !== "Ended") )
         .map(dataObj => 
            <Link to={`/show/${dataObj.show.id}`}>
              <Show 
              key = {dataObj.show.id}
              id = {dataObj.show.id}
              picture = {dataObj.show.image.medium}
              name = {dataObj.show.name}
              status = {dataObj.show.status}
              />
            </Link>  
          )}  
      </ul> 
    </div>

    );
}

export default Showlist;