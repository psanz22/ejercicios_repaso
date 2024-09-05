'use strict';

const globos = ['rojo', 'azul'];

const golosinas = ['chocolate', 'caramelo', 'galleta'];

const invitados = ['Paula', 'Iñigo', 'Tincho', 'Fredi'];

for (let i = 0; i < invitados.length; i++) {
  console.log(`Para ${invitados[i]} un globo ${globos[i % globos.length]}`);
  for (let golosina of golosinas) {
    console.log(` y toma tu ${golosina}`);
  }
}
//aquí usamos el resto para que el bucle de globos vuelva a comenzar
