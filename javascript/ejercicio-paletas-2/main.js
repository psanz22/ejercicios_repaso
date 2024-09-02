'use strict';

const container = document.querySelector('.wrapper');
const url =
  'https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json';

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
    });
};

const palettesLS = JSON.parse(localStorage.getItem('palettes'));
getApi();

console.log('palettesList', palettesLS);

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
};
renderPalettes(palettesLS);

// container.classList.add('palette');
