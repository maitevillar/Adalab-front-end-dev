import React from 'react';
import '../stylesheets/App.scss';
import Showlist from './Showlist';
import ShowDetail from './ShowDetail';
import { Switch, Route} from 'react-router-dom';
import Filter from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      isRunning: false
    }
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.renderShowDetail = this.renderShowDetail.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentDidMount () {
    this.getDataFromApi ();
  }

  getDataFromApi() {
    // hacemos la llamada al servidor
    fetch(`http://api.tvmaze.com/search/shows?q=girls`)
      .then(response => response.json())
      .then(responseData => {
        // y cuando responde el servidor guardamos los datos en el estado
        this.setState({ shows: responseData });
      });
  }


  handleCheckbox() {
    this.setState(prevState => {
      return {
        isRunning: !prevState.isRunning
      }
    })
  }

  renderShowDetail(props){
    const urlId = props.match.params.id;
    const showsData = this.state.shows;
      for(let showObj of showsData) {
      if(showObj.show.id === parseInt(urlId)) {
        return <ShowDetail showItem={showObj} />
    }
  }
  }
  

  render() {
    const {shows, isRunning} = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Filter handleCheckbox={this.handleCheckbox} isRunning={isRunning}/>
            <Showlist dataList={shows} isRunning={isRunning} />
          </Route>

          <Route path="/show/:id" render={this.renderShowDetail}/>

        </Switch>
      </div>
    );
  }
}

export default App;


