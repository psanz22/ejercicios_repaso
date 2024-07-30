'use strict';

const list = document.querySelector('.js-result');

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ

//1- pintar en pantalla los nombres de las promos

// for (let i = 0; i < promos.length; i++) {
//   list.innerHTML += `<ul><li>${promos[i].name}</li></ul>`;
// }
// for (const promo of promos) {
//   list.innerHTML += `<ul><li>${promo.name}</li></ul>`;
// }
//2- Pintar en pantalla las letras de las promos y los nombres de las promos
// for (let i = 0; i < promos.length; i++) {
//   list.innerHTML += `<ul><li><p>${promos[i].name}</p><p>${promos[i].promo}</p></li></ul>`;
// }
// for (let promo of promos) {
//   list.innerHTML += `<ul><li><p>${promo.name}</p><p>${promo.promo}</p></li></ul>`;
// }

//3 - Pintar en pantalla las letras de las promos, los nombres de las promos y el número de alumnas

// for (let i = 0; i < promos.length; i++) {
//   list.innerHTML += `<ul><li><p>${promos[i].name}</p><p>${promos[i].promo}</p><p>${promos[i].students.length} students</p></li></ul>`;
// }

// for (let promo of promos) {
//   list.innerHTML += `<ul><li><p>${promo.name}</p><p>${promo.promo}</p><p>${promo.students.length}</p></li></ul>`;
// }

//4- Pintar en pantalla los nombres de las promos y los nombres y la edad de las alumnas

// for (let i = 0; i < promos.length; i++) {
//   list.innerHTML += `<ul><li><p>Nombre: ${promos[i].name}</p></li></ul>`;
//   for (let j = 0; j < promos[i].students.length; j++) {
//     list.innerHTML += `<ul><li>${promos[i].students[j].name}, ${promos[i].students[j].age}</li></ul>`;
//   }
// }

// for (let promo of promos) {
//   list.innerHTML += `<ul><li><p>Nombre: ${promo.name}</p></li></ul>`;
//   for (let student of promo.students) {
//     list.innerHTML += `<ul><li>${student.name}, ${student.age}</li></ul>`;
//   }
// }

//5 - Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas

// for (let i = 0; i < promos.length; i++) {
//   list.innerHTML += `<ul><li><p>Nombre: ${promos[i].name}</p></li></ul>`;
//   for (let j = 0; j < promos[i].students.length; j++) {
//     list.innerHTML += `<ul><li ${promos[i].students[j].id}>${promos[i].students[j].name}, ${promos[i].students[j].age}</li></ul>`;
//   }
// }

// for (let promo of promos) {
//   list.innerHTML += `<ul><li><p>Nombre: ${promo.name}</p></li></ul>`;
//   for (let student of promo.students) {
//     list.innerHTML += `<ul><li ${student.id}>${student.name}, ${student.age}</li></ul>`;
//   }
// }

//6 - Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas que tenga edad par

// for (let i = 0; i < promos.length; i++) {
//   list.innerHTML += `<ul><li><p>Nombre: ${promos[i].name}</p></li></ul>`;
//   for (let j = 0; j < promos[i].students.length; j++) {
//     if (promos[i].students[j].age % 2 === 0) {
//       list.innerHTML += `<ul><li ${promos[i].students[j].id}>${promos[i].students[j].name}, ${promos[i].students[j].age}</li></ul>`;
//     }
//   }
// }

// for (let promo of promos) {
//   list.innerHTML += `<ul><li><p>Nombre: ${promo.name}</p></li></ul>`;
//   for (let student of promo.students) {
//     if (student.age % 2 === 0) {
//       list.innerHTML += `<ul><li ${student.id}>${student.name}, ${student.age}</li></ul>`;
//     }
//   }
// }

//7- Pintar en pantalla los nombres de las promos y los nombres de la edad y el id de las alumnas que trabajan en Google

// for (let i = 0; i < promos.length; i++) {
//   list.innerHTML += `<ul><li><p>Nombre: ${promos[i].name}</p></li></ul>`;
//   for (let j = 0; j < promos[i].students.length; j++) {
//     if (studentsWorkingInGoogle.includes(promos[i].students[j].id)) {
//       list.innerHTML += `<ul><li ${promos[i].students[j].id}>${promos[i].students[j].name}, ${promos[i].students[j].age}</li></ul>`;
//     }
//   }
// }

// for (let promo of promos) {
//   list.innerHTML += `<ul><li><p>Nombre: ${promo.name}</p></li></ul>`;
//   for (let student of promo.students) {
//     if (studentsWorkingInGoogle.includes(student.id)) {
//       list.innerHTML += `<ul><li>${student.name}, ${student.age}</li></ul>`;
//     }
//   }
// }

//8 - Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas y pintar el id de la alumna en consola cuando se haga click en una de ellas
