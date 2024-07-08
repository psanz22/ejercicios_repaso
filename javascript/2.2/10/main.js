'use strict';

const message = document.querySelector('h1');

let dogAge = 12;

if (dogAge <= 1) {
  dogAge = 15;
} else if (1 < dogAge && dogAge <= 2) {
  dogAge = 24;
} else {
  dogAge = 24 + 5 * dogAge;
}

console.log(dogAge);
message.innerHTML = `Tu perrito tiene ${dogAge} años.`;
