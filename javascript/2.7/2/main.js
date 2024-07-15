'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
};
adalaber1.run = () => console.log(`Estoy corriendo`);
adalaber1.runAMarathon = (distance) =>
  console.log(`Estoy corriendo un maratón de ${distance} kilómetros.`);

adalaber1.run();
adalaber1.runAMarathon(60);
