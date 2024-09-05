'use strict';

const button = document.querySelector('button');
const img = document.querySelector('img');

const getHusky = () => {
  fetch('https://dog.ceo/api/breed/husky/images/random')
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
      img.alt = 'Husky';
    });
};
button.addEventListener('click', getHusky);
