import React from 'react';
import '../stylesheets/App.css';
import Showlist from './Showlist';
import ShowDetail from './ShowDetail';
import { Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    }
    this.getDataFromApi = this.getDataFromApi.bind(this);
    this.renderShowDetail = this.renderShowDetail.bind(this);
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
    const {shows} = this.state;

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Showlist dataList={shows} />
          </Route>

          <Route path="/show/:id" render={this.renderShowDetail}/>

        </Switch>
      </div>
    );
  }
}

export default App;


