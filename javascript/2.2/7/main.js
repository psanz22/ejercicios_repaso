'use strict';
const inputText = document.querySelector('input');

const message = document.querySelector('p');

inputText.addEventListener('keyup', () => {
  const inputValue = inputText.value;
  const name = inputValue;
  if (name === 'Luisa') {
    message.innerHTML = `Bienvenida, ${name}`;
  } else if (name === 'María') {
    message.innerHTML = `Bienvenida, ${name}`;
  } else {
    message.innerHTML = 'No te conosco.';
  }
});
