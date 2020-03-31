'use strict'; 

function IvaCalculator(a){
    const priceWoIva = a;
    const Iva = (a * 21) / 100 ;
    const priceWIva = priceWoIva + Iva;

    const result = `Precio sin IVA: ${priceWoIva}€, IVA: ${Iva}€ y Total: ${priceWIva}€` ;
    
    return result;
}

const finalPrice = IvaCalculator(10);

console.log(finalPrice);