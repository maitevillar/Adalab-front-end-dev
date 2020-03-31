import React from 'react';
import logo from "../logo.svg";


class MediaCard extends React.Component {
    render() {
        const componentToRender = <MediaCard name="María Moliner"/>;
        
        return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-header-logo" alt="logo" />
                <div className="App-header-text"> <p className="App-header-text_title"> Maite Villar </p>
                <span className="App-header-text_subtitle"> Hello, {this.props.name}!</span> </div>
            </header> 

            <p className="App-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...7</p>
            
            <div className="App-extra"> <p className="App-extra_text"> Leer más...</p>
                <div className="App-extra-like"> <p className="App-extra-like_number"> 37</p> <i className="fas fa-heart"></i></div>
            </div>

          </div>

        );
      }
  }

export default MediaCard;
