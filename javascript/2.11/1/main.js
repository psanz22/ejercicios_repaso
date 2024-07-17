'use strict';
const arr = [];

const get100Numbers = () => {
  for (let i = 0; i < 101; i++) {
    arr.push(i);
  }
};
get100Numbers();

for (let ar of arr) {
  console.log(ar);
}

const getReversed100Numbers = () => {
  const arrReverse = arr.reverse();
  for (let arr of arrReverse) {
    console.log(arr);
  }
};
getReversed100Numbers();
