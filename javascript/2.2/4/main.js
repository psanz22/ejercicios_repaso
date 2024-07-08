'use strict';

const inputText = document.getElementById('name');

const text = document.querySelector('p');

inputText.addEventListener('keyup', (event) => {
  event.preventDefault();
  const inputValue = event.currentTarget.value;
  text.innerHTML = inputValue;
});
