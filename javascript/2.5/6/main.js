'use strict';

const button = document.querySelector('button');
const body = document.querySelector('body');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const handleClick = () => {
  const randomNumber = getRandomInt(4);
  //   body.classList.add('click');
  if (randomNumber === 1) {
    body.classList.add('colorOne');
    body.classList.remove('colorTwo', 'colorThree');
  } else if (randomNumber === 2) {
    body.classList.add('colorTwo');
    body.classList.remove('colorOne', 'colorThree');
  } else if (randomNumber === 3) {
    body.classList.add('colorThree');
    body.classList.remove('colorOne', 'colorTwo');
  } else {
    body.classList.remove('colorOne', 'colorTwo', 'colorThree');
  }
};

button.addEventListener('click', handleClick);
