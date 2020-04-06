import React from "react";
import '../stylesheets/App.css';
import clubs from '../data/club';
import ClubList from './Clublist';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: clubs,
    }
  }

  render() {
    //console.log(this.state.data);
    return (
      <div className="App">
        <ClubList dataList={this.state.data}/>
      </div>
    );
  }
}

export default App;
