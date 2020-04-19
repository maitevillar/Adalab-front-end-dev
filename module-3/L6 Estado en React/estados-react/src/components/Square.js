import React from 'react';
import '../stylesheet/App.css';


class InputResponse extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }


        render() {
            return (
                <div className={this.props.class} onClick={this.props.onClick}>
                </div>
            );
        }
}

export default InputResponse;
