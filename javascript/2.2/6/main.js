'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const button = document.querySelector('button');

const list = document.querySelector('ul');

button.addEventListener('click', () => {
  list.innerHTML =
    '<li>' +
    inception +
    '</li><li>' +
    theButterFlyEffect +
    '</li><li>' +
    eternalSunshineOfTheSM +
    '</li><li>' +
    blueVelvet +
    '</li><li>' +
    split +
    '</li>';
});
