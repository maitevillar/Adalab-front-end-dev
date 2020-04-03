import React from 'react';


const Daughter = props =>{
   console.log(props);
   const daughterName = props.name;
    return(
       <div>
           Hija: {daughterName}
        </div>
    )
}

export default Daughter;