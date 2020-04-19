import React from 'react';


class User extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }

    render(){
        return(
            <div className="user-card"> 
                <img src={this.props.userAvatar}/>
                <h1> {this.props.username.first}{this.props.username.last} </h1>
                <h5> {this.props.location.city} {this.props.location.state} {this.props.location.country} </h5>
            </div>
        )
    }
}

export default User;
