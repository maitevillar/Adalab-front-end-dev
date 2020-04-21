import React from 'react';
import PokeUnit from './PokeUnit';
import App from '../App.js'


class PokeList extends React.component{
    constructor(props) {
        super(props);
        this.listenClick = this.handleClick.bind(this);
    }

    handleClick(pokemonName){
        console.log(pokemonName);
    }

    render() {
        return(
        <ul>
            {this.props.dataList.map((pokemonObject,index) =>
            <PokeUnit
                name={pokemonObject.name}
                img={pokemonObject.img}
                handleClick={this.listenClick}
            />
            )}
        </ul>
    )};
}

export default PokeList;

