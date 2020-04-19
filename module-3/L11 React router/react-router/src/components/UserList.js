import React from 'react';
import User from './User'

const UserList = (props) => {
    const {data} = props;
    console.log(props)

    return(
        <ul className="userlist">
            {props.data 
            .map(userObj => 
            <li className="userlist__li" key={userObj.login.uuid}>
                <User username={userObj.name}
                      location={userObj.location}
                      userAvatar={userObj.picture.medium}
                />
            </li>
            )}
        </ul>
    )
}

export default UserList;
