'use strict'; 

function getEl(a){
    const result = document.querySelector(a);

    if(result == null){
        console.error(`No existe ningun elemento con clase, id o tag llamado ${a}`)
    }

    return result;
    
}

getEl('.lal')









    