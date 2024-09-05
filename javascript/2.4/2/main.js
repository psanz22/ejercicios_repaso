'use strict';

const sentence = document.querySelector('h1');
const nameStudent = 'María del Mar Ilundain Minondo';
const lengthName = nameStudent.length;

sentence.innerHTML = `El nombre de mi compañera es ${nameStudent}, y está compuesto por ${lengthName} caracteres`;
