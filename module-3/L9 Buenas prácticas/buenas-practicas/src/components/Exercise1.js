import React from 'react';

class Exercise1 extends React.Component{
    constructor(props){
        super(props);
    }

    render () {
        const numbers = [1, 4, 6, 8, 20, 25, 32, 40, 45, 70, 71, 77, 89];
        

        return (
            <div className="ex1"> 
            <form>
                <input id="num-input" type="number" 
                onKeyUp={this.props.eventListener} />
            </form>
            <ul>
            {numbers
            .filter( num => 0 < num)
            .map( (num) => <li key={num}> {num} </li>) }
            </ul>    
            </div>
        )
    }
}

export default Exercise1;