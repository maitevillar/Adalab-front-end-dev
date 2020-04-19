import React from 'react';
import '../stylesheets/App.css';
import Exercise1 from './Exercise1'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        num: 0,
      }
    
    this.eventListener = this.eventListener.bind(this);
    }
    
    eventListener(event){
      var inputNumber = event.currentTarget.value;
      console.log(inputNumber)
    }
  
      render () {
        return (
            <div className="hola"> 
                <Exercise1 eventListener={this.eventListener} value=""/>
            </div>
        )
    }

}

export default App;
