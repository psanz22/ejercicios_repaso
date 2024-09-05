'use strict';

const title = document.querySelector('h1');
const message = document.querySelector('p');
const wrapper = document.querySelector('div');

if (wrapper.classList.contains('warning')) {
  title.innerHTML = 'AVISO';
  message.innerHTML = 'Tenga cuidado';
} else if (wrapper.classList.contains('error')) {
  title.innerHTML = 'ERROR';
  message.innerHTML = 'Ha surgido un error';
} else if (wrapper.classList.contains('success')) {
  title.innerHTML = 'CORRECTO';
  message.innerHTML = 'Los datos son correctos';
}
