"use strict";

//que el contador se incremente cada 2 segundos --> setInterval()

let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 2000);
