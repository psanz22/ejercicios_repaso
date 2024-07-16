'use strict';

const message = document.querySelector('.message');
const inputBookOne = document.querySelector('#book1');
const inputBookTwo = document.querySelector('#book2');
const button = document.querySelector('.button');

let books = [];

const handleInput = (event) => {
  const inputValue = event.currentTarget.value;
  books.push(inputValue);
  return console.log(books);
};

const handleClick = (ev) => {
  ev.preventDefault();
  console.log('click');
  for (const book of books) {
    message.innerHTML += `¡A mí también me encantó ${book}!`;
  }
  return message;
};

inputBookOne.addEventListener('change', handleInput);
inputBookTwo.addEventListener('change', handleInput);
button.addEventListener('click', handleClick);
