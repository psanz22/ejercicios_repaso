'use strict';

const pearBag = {
  maxPears: 60,
  minPears: 10,
  actualPears: 30,
  initialPears: 11,
};
pearBag.add = function () {
  return (this.actualPears += 1);
};
pearBag.rest = function () {
  return (this.actualPears -= 1);
};
pearBag.reset = function () {
  return (this.actualPears = this.initialPears);
};
console.log(pearBag.actualPears);
console.log(pearBag.add());
console.log(pearBag.rest());
console.log(pearBag.rest());

console.log(pearBag.reset());
