'use strict';

const button = document.querySelector('button');

const input = document.querySelector('input');

const event = {};

const handleClick = (event) => {
  console.log(event);
};
const handleInput = () => {
  const inputValue = input.value;
  console.dir(inputValue);
};

button.addEventListener('click', handleClick);
input.addEventListener('keydown', handleInput);
