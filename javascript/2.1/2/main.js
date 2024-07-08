'use strict';

const sentence = document.querySelector('h1');
const adalaberOne = document.querySelector('.adalaber1');
const adalaberTwo = document.querySelector('.adalaber2');

document.querySelector('h1').innerHTML =
  sentence.innerHTML + ' ' + adalaberTwo.innerHTML;
