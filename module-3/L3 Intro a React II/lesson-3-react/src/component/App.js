import React, { Component } from "react";
import "../App.css";
import MediaCard from './MediaCard';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard />
      </div>
    );
  }
}

export default App;