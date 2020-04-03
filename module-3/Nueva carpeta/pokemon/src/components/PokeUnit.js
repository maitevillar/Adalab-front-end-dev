/// pasar el array por props y pintarlo

import React from 'react';

const PokeUnit = (props) =>{
        console.log(props);

        listenClick(evt){
            props.handleClick(evt.currentTarget.id)
        }

        return(
            <li className="pokeunit" onClick={this.listenClick} >
                <h3 className="name">{props.name} </h3>
                <img src={props.img} alt="pokemon"></img>
            </li>
        )
    }


export default PokeUnit;

