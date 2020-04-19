import React from 'react';
import './stylesheet/App.css';
import {fetchReasons}  from './services/Fetch';
import People from './components/People';

class App extends React.Component{
  constructor(props){
    super(props);
   
    this.state = {
      data: []
    }
    console.log(this.state)

    // this.fetchNewReasons = this.fetchNewReasons.bind(this);
  }

  // Evento que se ejecuta cuando se renderiza la lista + fetch + localstorage (acordarse del blink)
  componentDidMount() {
    fetchReasons()
      .then(result => {
        this.setState({
          data: [result.results]
        }); 
        console.log(result.results)
      }); 
    
  }

  render() {
    const { data } = this.state;
    return(
      <div className="App">
        <People storage={this.state}/>
      </div>
    )
  }

}

export default App;
