'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

const bestLostNumber = () => {
  const pairNumbers = [];
  const threeNumbers = [];

  for (let lostNumber of lostNumbers) {
    if (lostNumber % 2 === 0) {
      lostNumbers.slice(lostNumber);
      pairNumbers.push(lostNumber);
    }
  }
  for (let lostNumber of lostNumbers) {
    if (lostNumber % 3 === 0) {
      lostNumbers.slice(lostNumber);
      threeNumbers.push(lostNumber);
    }
  }
  const concatResult = pairNumbers.concat(threeNumbers);
  return console.log(
    pairNumbers + ' and ' + threeNumbers + ' and ' + concatResult
  );
};
bestLostNumber();
