'use strict';

// ingredientes: pollo, merluza o espinacas
// por defecto ' no hay nada en la nevera' si no hay ingredientes
// sugerencias: filetes de patatas, merluzita en salsa verde, espinacas rehogadas

const ingredient = 'Merluza';

switch (ingredient) {
  case 'Pollo':
    console.log('Recomendación: filete de pollo con patatas');
    break;
  case 'Merluza':
    console.log('Recomendación: merluzita en salsa verde');
    break;
  case 'Espinacas':
    console.log('Recomendación: espinacas rehogadas');
    break;
  default:
    console.log('No hay nada en la nevera');
}
