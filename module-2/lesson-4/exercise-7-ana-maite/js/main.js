
function getEl(a){
    const result = document.querySelector(a);

    if(result == null){
        console.error(`No existe ningun elemento con clase, id o tag llamado ${a}`)
    }

    return result; 
}

const className = getEl('.subtitle');
const number = className.innerHTML;



function parImpar(num){

    if (num % 2 == 0) { 
        return 'par';
    }
    else{
       return 'impar';
    }
}

const typeOfNumber = parImpar(number);


console.log(`El numero del titulo es ${number} y es de tipo ${typeOfNumber}`) ;

