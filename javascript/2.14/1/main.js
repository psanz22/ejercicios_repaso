'use strict';

const button = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('li');

const renderCharacter = (characters) => {
  for (let character of characters) {
    list.innerHTML += `<li>${character.name}(${character.gender})</li>`;
  }
};

const handleClick = (ev) => {
  ev.preventDefault();
  let inputValue = input.value;

  fetch(`https://swapi.py4e.com/api/people/?search=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;
      console.log(characters);
      renderCharacter(characters);
    });
};

button.addEventListener('click', handleClick);
