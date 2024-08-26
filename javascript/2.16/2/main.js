"use strict";

let counter = 0;
const contador = document.querySelector(".contador");

const grape = () => {
  counter++;
  contador.innerHTML = counter;
  if (counter === 13) {
    contador.innerHTML = "FELIZ AÑO NUEVO";
    clearInterval(intervalId);
  }
};

const intervalId = setInterval(grape, 1000);
