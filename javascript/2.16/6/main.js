"use strict";

const button = document.querySelector(".btn");
const warning = document.querySelector("p");
let timeOutId;

const msg = () => {
  warning.innerHTML = "¿Te has dormido?";
};
const handleButton = () => {
  if (timeOutId) {
    clearTimeout(timeOutId);
    warning.innerHTML = "";
  }
  timeOutId = setTimeout(msg, 10000);
};

button.addEventListener("click", handleButton);
