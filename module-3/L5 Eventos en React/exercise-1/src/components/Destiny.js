import React from 'react';


class Destiny extends React.Component{
    constructor(props) {
        super(props);
        this.handleValue = this.handleValue.bind(this);
    }

    handleValue(ev){
        const city = ev.target.value;
        console.log(city)
    
        if ( city === 'buenosaires'){
            
        }
    }

    render() {
        console.log(this.props.optionForm.buenosaires);

    return(
<div>
        <select onChange={this.handleValue}>
            <option> Choose an option </option>
            <option> buenosaires </option>
            <option> tokio </option>
            <option> boston</option>
        </select>
       
       <img className="imagenFoto" src="" width="300px" height="300px"/>

       </div>
    )};

}

export default Destiny;
