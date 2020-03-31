'use strict'

const arr = [];

function get100Numbers(){
    for (let i = 0; i < 100; i++){
        const newLength = arr.push(i);
    }
}

get100Numbers();

console.log(arr.reverse());