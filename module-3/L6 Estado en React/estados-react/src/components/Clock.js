import React from 'react';
import '../stylesheet/App.css';


class Clock extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props)
    }

        render() {
            return (
                <div className="clock-container">
                    <span> {this.props.date} </span>
                    <button onClick={this.props.update}> </button>
                </div>
            );
        }
}

export default Clock;