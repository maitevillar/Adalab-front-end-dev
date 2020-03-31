'use strict'

const numbers = [3, 7, 4, 2, 2];
let sumNumber;
let finalMark;

for (let i = 0; i < numbers.length; i++){
    sumNumber += numbers[i];
    finalMark = sumNumber / (i+1);

    console.log(`Vuelta ${i+1}, está dividido entre ${sumNumber} y la nota final es ${finalMark} `)
}

