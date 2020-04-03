import React from 'react';
import logo from "../logo.svg";
import "../App.css";


const MediaCard = props => {

        const mediaName = props.name;
        const mediaDate = props.date;
      //  const mediaImg = props.image;
        const mediaText = props.text;
        const mediaLikes = props.likes;
       // const mediaHeart = props.Heart;

        return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-header-logo" alt="logo" />
                <div className="App-header-text">  <p className="App-header-text_title"> {mediaName} </p>
                <span className="App-header-text_subtitle"> {mediaDate}</span> </div>
            </header> 

            <p className="App-text">
            {mediaText}</p>
            
            <div className="App-extra"> <p className="App-extra_text"> Leer más...</p>
                <div className="App-extra-like"> <p className="App-extra-like_number"> {mediaLikes}</p> <i className="fas fa-heart"></i></div>
            </div>

          </div>

        );
  }

export default MediaCard;