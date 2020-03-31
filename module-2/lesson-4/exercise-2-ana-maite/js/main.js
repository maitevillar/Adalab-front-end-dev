'use strict'; 

function media(a, b, c, d){
    const result = (a + b + c + d) / 4;
    return result;
}

const mediaResult = media (48 , 68, 38, 78);
const mediaResult2 = media (80 , 120, 60, 140);
const mediaResult3 = media (2 , 6, 4, 0);

console.log(mediaResult, mediaResult2, mediaResult3);