'use strict';

const list = document.querySelector('ul');

const numbers = [1, 2, 3];

const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');

const newContent = document.createTextNode(numbers[0]);
const newContent2 = document.createTextNode(numbers[1]);
const newContent3 = document.createTextNode(numbers[2]);

li1.appendChild(newContent);
li2.appendChild(newContent2);
li3.appendChild(newContent3);

list.appendChild(li1);
list.appendChild(li2);
list.appendChild(li3);
