import React from 'react';
import Club from './Club';

const ClubList = (props) => {
    return (
        <ul>
           {props.dataList.map((clubObject, index) => 
           <Club key={index}
                 logo={clubObject.fa}
                 name={clubObject.name}
                 clubmembers={clubObject.members}
           />
           )}
        </ul>
    )
}

export default ClubList;

//recibir el Array de Clubs a traves del estado definido en App.