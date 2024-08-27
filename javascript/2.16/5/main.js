"use strict";

const buttonStart = document.querySelector(".start");
const buttonStop = document.querySelector(".stop");
const msg = document.querySelector("p");
let intervalId = "";

let counter = 0;

const incrementCounter = () => {
  counter++;
  msg.innerHTML = counter;
};

const handleStart = () => {
  intervalId = setInterval(incrementCounter, 1000);
};

const handleStop = () => {
  clearInterval(intervalId);
};

buttonStart.addEventListener("click", handleStart);
buttonStop.addEventListener("click", handleStop);
