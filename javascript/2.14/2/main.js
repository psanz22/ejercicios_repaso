'use strict';

const inputName = document.querySelector('.js-name');
const inputLastName = document.querySelector('.js-lastname');
const paragraph = document.querySelector('p');

const paintParagraph = (name, lastname) => {
  paragraph.innerHTML = `${name} ${lastname}`;
};

const handleKeyUp = (ev) => {
  ev.preventDefault();
  const inputValue = inputName.value;
  const lastNameValue = inputLastName.value;
  paintParagraph(inputValue, lastNameValue);
  const user = { name: inputValue, lastname: lastNameValue };
  localStorage.setItem('name', JSON.stringify(user));
};

inputName.addEventListener('keyup', handleKeyUp);
inputLastName.addEventListener('keyup', handleKeyUp);
