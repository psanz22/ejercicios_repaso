'use strict';

let acc = 0;

for (let i = 1; i < 10; i++) {
  console.log('Voy por la vuelta ' + i);
}

for (let i = 0; i < 10; i++) {
  acc += 2;
  console.log('El resultado es ' + acc);
}
