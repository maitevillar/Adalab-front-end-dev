'use strict'

const adalabers = [
    {
      name: 'Maria',
      age: 29,
      job: 'diseñadora'
    },
    {
        name: 'Lucia',
        age: 31,
        job: 'Ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocio',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 30,
        job: 'diseñadora'
    },
  ];

    function countAdalabers(){
      console.log(`La cantidad de Adalabers es de: ${adalabers.length}`);
  }

countAdalabers();



    function averageAge(){
        let sumAge = 0;
        for (let item of adalabers){
            sumAge += item.age;
        }
        console.log(sumAge/adalabers.length);
    }

averageAge();



function countDesigners(){
    let designersNum = 0;
    for(let item of adalabers)
    if(item.job === 'diseñadora'){
        console.log(designersNum += 1);
    }
}

countDesigners();

