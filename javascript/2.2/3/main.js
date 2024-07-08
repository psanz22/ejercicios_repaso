'use strict';

const text = document.querySelector('p');

text.addEventListener('click', () => {
  text.innerHTML = text.innerHTML + text.innerHTML;
});
