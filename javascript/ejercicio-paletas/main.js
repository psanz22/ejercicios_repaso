"use strict";

/*
-hacer el fetch
- guardar lo que nos interesa en local Storage
- guardarlo en una variable global
- tenemos que pintar cada color de la paleta mediante un bucle


*/

const container = document.querySelector(".wrapper");

const getAPI = () => {
  fetch(
    "https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palette.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.palettes);
      saveLocalStorage(
        data.palettes[0].name,
        JSON.stringify(data.palettes[0].colors)
      );
    });
};
getAPI();

const saveLocalStorage = (name, colors) => {
  localStorage.setItem("namePalette", name);
  localStorage.setItem("colorPalette", colors);
};

const titlePalette = localStorage.getItem("namePalette");
console.log("titlePalette", titlePalette);
const paletteColor = JSON.parse(localStorage.getItem("colorPalette"));
console.log("paletteColor", paletteColor);

const renderPalette = () => {
  let content = `<h1>${titlePalette}</h1>
      <div class="wrapper__palette">`;
  container.innerHTML = content;

  for (let i = 0; i < paletteColor.length; i++) {
    content += `<div class="palette__color" style="background-color: #${paletteColor[i]}"></div>`;
  }
  container.innerHTML = content;
};
renderPalette();
