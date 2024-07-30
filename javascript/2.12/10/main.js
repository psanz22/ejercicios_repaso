'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56, student: true },
  { name: 'Nymphadora Tonks', time: 9, student: false },
  { name: 'Luna Lovegood', time: 45, student: true },
  { name: 'Cedric Diggory', time: 28, student: true },
  { name: 'Cho Chang', time: 35, student: true },
];

const winner = runners.reduce((acc, number) => {
  if (acc.student === true && acc.time < number.time) {
    return acc;
  } else {
    return number;
  }
});

console.log(winner);
