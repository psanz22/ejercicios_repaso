'use strict';

const getEl = (selector) => {
  const element = document.querySelector(selector);
  if (element === null) {
    console.error('No existe ningún elemento con esa clase, id o tag');
  }
  return document.querySelector(selector);
};

const isPair = (a) => {
  const rest = a % 2;
  if (rest / 2 === 0) {
    console.log('IT IS PAIR, BIATCH');
  } else {
    console.log('It is not pair, cuty pie');
  }
};

const paragraph = getEl('p');

const string = paragraph.innerHTML;

const number = parseInt(string);

console.log('El número es' + ' ' + number);

isPair(number);
