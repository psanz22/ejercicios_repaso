'use strict';

const job = 'developer';

const user = {
  firstName: 'Raúla',
  lastName: 'Fernanda',
  age: 60,
  job: job,
};
console.log(user.job);
console.log(user.firstName);

user.firstName = 'Yenga';

console.log(user.firstName);

user.age = user.age + 1;

console.log(user.age);
