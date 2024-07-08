'use strict';

const button = document.querySelector('button');

let message = document.querySelector('span');

const inputText = document.getElementById('name');

button.addEventListener('click', (ev) => {
  ev.preventDefault();
  const inputValue = inputText.value;
  const newName = '<span>Hola' + ' ' + inputValue + '</span>';
  message.innerHTML = newName;
});
