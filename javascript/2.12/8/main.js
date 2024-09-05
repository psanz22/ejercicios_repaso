'use strict';

const times = [56, 9, 45, 28, 35];

const result = times.reduce((acc, number) => acc + number);

const average = result / times.length;

console.log(average);

const prueba = times.reduce((acc, number) => acc + number, 5);

console.log(prueba);
