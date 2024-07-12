'use strict';

const button = document.querySelector('button');
const counter = document.querySelector('h1');

const handleClick = () => {
  const string = counter.innerHTML;
  let number = parseInt(string);
  number += 1;
  counter.innerHTML = number;
};

button.addEventListener('click', handleClick);
