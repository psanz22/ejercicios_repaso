'use strict';

const numbers = [22, 12, 2, 25, 28];

const numbers2 = [1, 2, 3];

const numbers3 = [10, 10, 10, 11];

// for (const number of numbers) {
//   acc += number;
// }
// console.log('La media es: ' + acc / numbers.length);

// numbers[5] = 10;

// console.log('El nuevo array es: ' + numbers);

// acc = 0;

// for (const number of numbers) {
//   acc += number;
// }

// console.log('acc: ' + acc);

// console.log('La media del nuevo array es: ' + acc / numbers.length);

const average = (numbers) => {
  let acc = 0;

  for (const number of numbers) {
    acc += number;
  }
  const result = acc / numbers.length;

  return console.log('La media es: ' + result);
};

average(numbers);

average(numbers2);

average(numbers3);
