'use strict';

const getEl = (selector) => {
  const element = document.querySelector(selector);
  if (element === null) {
    console.error('No existe ningún elemento con esa clase, id o tag');
  }
  return document.querySelector(selector);
};

console.log(getEl('.tn'));
