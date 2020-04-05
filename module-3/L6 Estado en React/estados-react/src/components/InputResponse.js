import React from 'react';
import '../stylesheet/App.css';


class InputResponse extends React.Component{
    constructor(props){
        super(props);
        this.state = { value: ''}
        this.keyBoardListener = this.keyBoardListener.bind(this)
    }
    
    keyBoardListener(event){
        //container.innerHTML = targetValue;
        this.setState ({value: event.target.value}) 
    }

        render() {
            return (
                <div>
                <label> Escribe aquí </label>
                <input type="text" className="text-input" onChange={this.keyBoardListener} /> 
                <p className="container"> {this.state.value} </p>
                </div>
            );
        }
}

export default InputResponse;

