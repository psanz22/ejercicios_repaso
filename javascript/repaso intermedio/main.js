'use strict';

const button = document.querySelector('.input');
const select = document.querySelector('select');
const face = document.querySelector('h1');
const body = document.querySelector('body');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const isPair = (number) => {
  if (number % 2 === 0) {
    console.log('is pair');
  } else {
    console.log('is not pair');
  }
};

const handleClick = () => {
  const selectValue = select.value;
  if (selectValue === 'sad') {
    face.innerHTML = `<h1>:(</h1>`;
  } else {
    face.innerHTML = `<h1>:)</h1>`;
  }
  console.log(getRandomInt(100));
  const randomNumber = getRandomInt(100);
  isPair(randomNumber);

  if (randomNumber % 2 !== 0) {
    body.classList.add('otherBackground');
  } else {
    body.classList.remove('otherBackground');
  }
};

button.addEventListener('click', handleClick);
