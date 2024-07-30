'use strict';

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false },
];

const greetings = users.map((user) => {
  if (user.isPremium === true) {
    return `Bienvenida ${user.name} eres la pera limonera.`;
  } else {
    return `Otra vez tú ${user.name}`;
  }
});

console.log(greetings);
