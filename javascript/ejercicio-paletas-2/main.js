'use strict';

const container = document.querySelector('.wrapper');
const url =
  'https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json';
const inputText = document.querySelector('.inputText');

const saveLS = (palettes) => {
  localStorage.setItem('palettes', palettes);
};

const getApi = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.palettes[0]);
      const palettesList = JSON.stringify(data.palettes);
      saveLS(palettesList);
      renderPalettes(data.palettes);
    });
  console.log('he hecho petición');
};
const handleClick = (ev) => {
  console.log('click');
  getFav(ev.currentTarget);
};

const palettesLS = JSON.parse(localStorage.getItem('palettes'));

const handleKey = () => {
  const inputValue = inputText.value;
  console.log(inputValue);
  const filteredPalettes = palettesLS.filter((palette) => {
    return palette.name.toLowerCase().includes(inputValue.toLowerCase());
  });
  renderPalettes(filteredPalettes);
};

const renderPalettes = (palettes) => {
  let html = '';
  for (let palette of palettes) {
    html += `<div class="js-palette" id="${palette.id}"><h1>${palette.name}</h1><div class="palette">`;
    //   container.innerHTML += ;
    for (let color of palette.colors) {
      html += ` <div class="palette__color" style="background-color: #${color}"></div>`;
      //   container.innerHTML += ;
    }
    html += `</div></div>`;
  }
  container.innerHTML = html;
  const containerPalettes = document.querySelectorAll('.js-palette');
  for (let containerPalette of containerPalettes) {
    containerPalette.addEventListener('click', handleClick);
  }
};

const getFav = (palette) => {
  palette.classList.toggle('fav');
};

if (palettesLS) {
  renderPalettes(palettesLS);
} else {
  getApi();
}

inputText.addEventListener('keyup', handleKey);
