'use strict';

// nos devuelve el ancho del contenido y el ancho total de la caja

const calculator = (isBorderBox, width, padding, border) => {
  if (isBorderBox === true) {
    const totalWidth = width - padding - border;
    return console.log(
      'El ancho del contenido es:' +
        width +
        'y el ancho total de la caja es' +
        totalWidth
    );
  } else {
    const totalWidth = width + padding + border;
    return console.log(
      'El ancho del contenido es:' +
        width +
        'y el ancho total de la caja es' +
        totalWidth
    );
  }
};

calculator(false, 100, 5, 2);
