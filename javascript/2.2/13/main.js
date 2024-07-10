'use strict';

const teacherOne = document.querySelector('.teacher--isra');
const teacherTwo = document.querySelector('.teacher--tuerto');
const teacherThree = document.querySelector('.teacher--nasi');
const favoriteOne = teacherOne.querySelector('.favorite');
const favoriteTwo = teacherTwo.querySelector('.favorite');
const favoriteThree = teacherThree.querySelector('.favorite');

teacherOne.addEventListener('click', () => {
  teacherOne.classList.toggle('teacher--selected');
  if (teacherOne.classList.contains('teacher--selected')) {
    favoriteOne.innerHTML = 'Quitar';
  } else {
    favoriteOne.innerHTML = 'Añadir';
  }
});
teacherTwo.addEventListener('click', () => {
  teacherTwo.classList.toggle('teacher--selected');
  if (teacherTwo.classList.contains('teacher--selected')) {
    favoriteTwo.innerHTML = 'Quitar';
  } else {
    favoriteTwo.innerHTML = 'Añadir';
  }
});
teacherThree.addEventListener('click', () => {
  teacherThree.classList.toggle('teacher--selected');
  if (teacherThree.classList.contains('teacher--selected')) {
    favoriteThree.innerHTML = 'Quitar';
  } else {
    favoriteThree.innerHTML = 'Añadir';
  }
});
