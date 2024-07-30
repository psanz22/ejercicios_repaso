'use strict';

const title = document.querySelector('h1');
const button = document.querySelector('button');

const getInteger = () => {
  fetch('https://api.rand.fun/number/integer?min=0&max=10')
    .then((response) => response.json())
    .then((data) => {
      title.innerHTML = data.result;
    });
};

button.addEventListener('click', getInteger);
