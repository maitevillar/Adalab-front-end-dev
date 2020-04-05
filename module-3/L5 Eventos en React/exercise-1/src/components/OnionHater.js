import React from 'react';


class OnionHater extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(ev){
        const textContent = ev.currentTarget.value;
        if (textContent != 'onion'){
            isHating = false;
        } else {
            isHating = true;
        }
    }
    
    render() {

    return(
        <textarea className="text" onKeyUp={this.handleChange}></textarea>
    )};

}

export default OnionHater;
