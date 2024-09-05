'use strict';
const list = document.querySelector('ul');
let tree = [];
tree.push('★');

const makeTree = (numberOfLines) => {
  for (let i = 1; i < numberOfLines + 1; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
      line += ' ▲';
    }
    tree.push(line);
  }
  tree.push('|');
  for (let line of tree) {
    console.log(line);
  }
};
tree = makeTree(5);
