'use strict';

const nameUser = document.querySelector('.name');
const repos = document.querySelector('.repositories');
const img = document.querySelector('.img');
const button = document.querySelector('button');
const input = document.querySelector('input');

const getUser = (ev) => {
  ev.preventDefault();
  const inputValue = input.value;
  console.log(inputValue);

  fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      nameUser.innerHTML = `<p>${data.login}</p>`;
      img.src = data.avatar_url;
      repos.innerHTML = `<p>${data.public_repos}</p>`;
    });
};

button.addEventListener('click', getUser);
