import React from 'react';
import halfPage from '../styles/halfPage.css'

const HalfPage = (props) => {
    return(
        <div className="halfPageDiv"> {props.children} </div>
    )
}


export default HalfPage;