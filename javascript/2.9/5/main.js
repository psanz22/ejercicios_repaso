'use strict';

const adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'designer',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'chemical engineer',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'journalist',
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actress',
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'designer',
  },
];

const countAdalabers = () => {
  return console.log(adalabers.length);
};

const averageAge = () => {
  let totalAge = 0;
  for (let adalaber of adalabers) {
    totalAge += adalaber.age;
  }

  return console.log(
    'La media de edad de las adalabers es: ' + totalAge / adalabers.length
  );
};

const theYoungest = () => {
  let youngestAdalaber = adalabers[0];
  for (let adalaber of adalabers) {
    if (adalaber.age < youngestAdalaber.age) {
      youngestAdalaber = adalaber;
    }
  }
  return console.log('La adalaber más joven es: ' + youngestAdalaber.name);
};

const countDesigners = () => {
  let totalDesigners = 0;
  for (let adalaber of adalabers) {
    if (adalaber.job === 'designer') {
      totalDesigners += 1;
    }
  }
  return console.log('El total de adalabers diseñadoras es ' + totalDesigners);
};
countDesigners();
