import React from 'react';
import '../stylesheets/App.css';
import fetchData from '../service/FetchData'
import UserList from './UserList'
import { BrowserRouter, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
    }
  }

  //FETCH
  componentDidMount(){
    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  render() {
    const {data} = this.state;
    console.log(this.state.data)

    return (
      <div className="App">
        <switch>
        <UserList data={data}/>
        </switch>
    </div>
    )
  }
}


export default App;
