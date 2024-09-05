'use strict';

const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');

function handleClick(ev) {
  const selectedButton = ev.currentTarget;
  console.log(selectedButton);
  selectedButton.classList.toggle('newClass');
}

buttonOne.addEventListener('click', handleClick);
buttonTwo.addEventListener('click', handleClick);
