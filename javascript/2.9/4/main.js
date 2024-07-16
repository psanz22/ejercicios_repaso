'use strict';

const list = document.querySelector('ul');
const nextFifteenYears = [];

const huntersMoon = () => {
  let date = 2017;
  for (let i = 0; i < 16; i++) {
    date += 3;
    nextFifteenYears[i] = date;
  }
  for (const next of nextFifteenYears) {
    list.innerHTML += `<li>La próxima luna del cazador será en ${next}</li>`;
  }

  return console.log(nextFifteenYears);
};
huntersMoon();
