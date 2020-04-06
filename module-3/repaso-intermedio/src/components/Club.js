import React from 'react';

const Club = (props) => {
    return(
        <li className="clubList__club">
            <div className="clubList__club-logo">
                <i className={props.logo}></i> 
            </div>
            <div className="clubList__club-info">
                <h1 className="clubList__title">{props.clubname}</h1>
                <h2> Members</h2>
                <ul className="members">
                    {props.clubmembers.map((singleMember, index) =>
                        <li key={index}> 
                         {singleMember}
                        </li>
                    )}
                </ul>
            </div>
        </li>
    )
}

export default Club;

// voy a recibir un array de miembros y quiero pintarlos: Usar .map con clubmembers(es un array) (singleMember)- sirve para utilizar cada elemento. Siempre que pintemos un listado, (elemento , index)