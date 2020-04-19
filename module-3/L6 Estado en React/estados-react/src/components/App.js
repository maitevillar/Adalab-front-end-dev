import React from 'react';
import '../stylesheet/App.css';
// import InputResponse from './InputResponse.js'
// import Square from './Square.js'
import Clock from './Clock.js'


class App extends React.Component{
  constructor(props){
      super(props);
      this.state = { 
        // styling: 'auto'
      }

      this.updateClock = this.updateClock.bind(this)
      // this.handleClick = this.handleClick.bind(this)
  }
  
    updateClock() {
      const clock = new Date('');
      console.log(clock.prototype.getHours());
      }
  // handleClick(){
  //   this.setState((prevState, props) => ({
  //     styling: prevState.styling === 'auto' ? 'change' : 'auto' 
  //   }))
  // }

  render(){
    return (
      <div className="App">
      {/* <InputResponse/> */}
      {/* <Square class={`square-container__${this.state.styling}`}
      onClick={this.handleClick} /> */}
      <Clock update={this.updateClock} />
     </div>
    )
  }
}

export default App;
