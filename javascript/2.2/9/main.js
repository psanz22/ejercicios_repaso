'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'https://dev.adalab.es/gato-siames.webp';

const image = document.querySelector('.user__avatar');

const message = document.querySelector('p');

// image.innerHTML = ` <img src="${userAvatar}" alt="nuevo avatar">`;

console.log(!!userAvatar);

image.src = userAvatar || DEFAULT_AVATAR;
