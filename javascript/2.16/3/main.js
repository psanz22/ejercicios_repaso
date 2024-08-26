"use strict";

let counter = 1;
const mensaje = document.querySelector(".hola");

const message = () => {
  counter++;
  mensaje.innerHTML = `Escrito hace ${counter} segundos.`;
  if (counter === 60) {
    mensaje.innerHTML = "Escrito hace 1 minuto.";
    clearInterval(intervalId);
  }
};
const intervalId = setInterval(message, 1000);
