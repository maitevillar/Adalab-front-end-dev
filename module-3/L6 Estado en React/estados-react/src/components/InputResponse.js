import React from 'react';
import '../stylesheet/App.css';


class InputResponse extends React.Component{
    constructor(props){
        super(props);
    }
        render() {
            return (
            <form>
                <label> Escribe aquí 
                <input type="text"  name="text-input"/>
                </label>
                <input type="text" className="text-input" value="input-value"/>
            </form>

                <textarea className="container"></textarea>
            );
        }
}

export default InputResponse;