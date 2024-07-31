'use strict';

const optionOne = document.querySelector('#option1');
const optionTwo = document.querySelector('#option2');
const body = document.querySelector('body');
const form = document.querySelector('form');

const theme = localStorage.getItem('theme');

if (theme === '1') {
  body.classList.add('light');
} else if (theme === '2') {
  body.classList.add('dark');
} else {
  body.classList.remove('light');
  body.classList.remove('dark');
}

const storeSelection = (selection) => {
  localStorage.setItem('theme', selection);
};

const handleClick = (ev) => {
  if (ev.target.value === '1') {
    body.classList.add('light');
    body.classList.remove('dark');
  } else if (ev.target.value === '2') {
    body.classList.add('dark');
    body.classList.remove('light');
  }
  storeSelection(ev.target.value);
};

form.addEventListener('click', handleClick);
