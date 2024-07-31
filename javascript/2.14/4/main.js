'use strict';

const img = document.querySelector('img');

fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].url);
    img.src = `${data[0].url}`;
  });
