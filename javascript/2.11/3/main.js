'use strict';
const list = document.querySelector('ul');
let tree = [];

const makeTree = (numberOfLines) => {
  tree.push('★');
  for (let i = 0; i < numberOfLines + 1; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += '▲';
    }
    tree.push(line);
  }
  for (let line of tree) {
    console.log(line);
  }
};
tree = makeTree(5);
