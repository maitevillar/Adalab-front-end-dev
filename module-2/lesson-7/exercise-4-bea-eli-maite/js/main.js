'use strict'

//05/10/2017 -variable < 15- cada 3 años ( variable+=3) - 


for (let moon = 1 ; moon < 15; moon+=3){
    console.log(`la luna sale cada ${moon}`);
}

for (let year = 2017 ; year < 2060 ; year+=3){
    console.log(`La siguiente luna es en octubre de ${year}`);
}


/// El bucle lo mantienes en orden

let nextMoonYear = 2017;

for (let i = 0 ; i < 15 ; i++){
    nextMoonYear += 3;
    console.log(`El año ${i +1} con Luna de Cazador será en ${nextMoonYear}`)
}