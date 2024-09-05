'use strict';
const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const wrapOne = document.querySelector('.wrap1');
const wrapTwo = document.querySelector('.wrap2');
const wrapThree = document.querySelector('.wrap3');

wrapOne.innerHTML = `<li class="wrap1">
        <h1>${firstDogName}</h1>
        <img src="${firstDogImage}" alt="${firstDogName}" />
      </li>`;
wrapTwo.innerHTML = `<li class="wrap2">
      <h1>${secondDogName}</h1>
      <img src="${secondDogImage}" alt="${secondDogName}" />
    </li>`;
wrapThree.innerHTML = `<li class="wrap3">
    <h1>${thirdDogName}</h1>
    <img src="${thirdDogImage}" alt="${thirdDogName}" />
  </li>`;
