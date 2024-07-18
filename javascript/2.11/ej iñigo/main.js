'use strict';

function getRandomInt() {
  return Math.floor(Math.random(1, 10) * 21);
}

let personajes = [
  {
    name: 'Iñigo',
    monedas: [],
  },
  {
    name: 'Paula',
    monedas: [],
  },
  {
    name: 'Tincho',
    monedas: [],
  },
];

let bolsaDinero = [];

for (let i = 0; i < 21; i++) {
  const randomNumber = getRandomInt();

  bolsaDinero.push(randomNumber);
}
console.log('monedas: ' + bolsaDinero);

console.log(personajes);

let index = 0;

while (bolsaDinero.length > 0) {
  let pop = bolsaDinero.pop();
  personajes[index % personajes.length].monedas.push(parseInt(pop));
  index += 1;

  //   if (index > 2){    ESTO SERÍA LO MISMO PERO MENOS EFICIENTE
  //     index = 0
  //   }
}

// for (let personaje of personajes) {
//   for (let i = 0; i < personajes.length; i++) {
//     if (personajes[i].name === 'Paula') {
//       console.log(personajes[i].monedas);
//       personajes[i].monedas += 2;
//     } else {
//       personajes[i].monedas += 1;
//     }
//   }
// }

for (let personaje of personajes) {
  for (let i = 0; i < personaje.monedas.length; i++) {
    if (personaje.name === 'Paula') {
      personaje.monedas[i] += 2;
    } else {
      personaje.monedas[i] += 1;
    }
  }
}

console.log(personajes);
