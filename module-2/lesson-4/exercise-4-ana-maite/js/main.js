'use strict'; 


function parImpar(num){

    if (num % 2 == 0) { 
        return 'par';
    }
    else{
        return 'impar';
    }
}

const typeOfNumber = parImpar(100);

console.log(typeOfNumber);


/* if(num % 2 == 0) 

The modulo (%) operator calculates the remainder of a division operation. 

In this case, it calculates the remainder of num(x) divided by 2. If (x) is an even(par) number, the result will be 0 and if it is an odd number, the result will be 1. So this if statement checks to see if (x) is an even number.*/