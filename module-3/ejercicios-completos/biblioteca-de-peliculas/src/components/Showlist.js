import React from 'react';
import '../stylesheets/App.css';
import Show from './Show';
import { Link } from 'react-router-dom';

const Showlist = (props) => {
    const {dataList} = props
    console.log(dataList)
  
    return (
    <div className="content-container">
        <h1> Buscador de series </h1>
        <section className="filter-section"> 
            {/* <label> </label>
            <input> aqui va el input </input>
            <label> </label>
            <input type="radio"> Aqui el checkbox</input> */}
        </section>

      <ul className="showlist-container">
         {dataList
         .map(dataObj => 
            <Link to={`/show/${dataObj.id}`}>
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