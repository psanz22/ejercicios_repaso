'use strict';

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');

const handleClick = (ev) => {
  ev.preventDefault();
  body.classList.toggle('alarm');
};

for (let button of buttons) {
  button.addEventListener('click', handleClick);
}
