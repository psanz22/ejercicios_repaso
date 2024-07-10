'use strict';
const price = 10;

const IVA = (price) => {
  return 21 / price;
};
const total = (price) => {
  return IVA(price) + price;
};

const sentence = (price) => {
  return `Precio sin IVA: ${price}, IVA: ${IVA(price)} y Total: ${total(
    price
  )} `;
};

console.log(sentence(price));
