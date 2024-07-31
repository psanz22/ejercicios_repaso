'use strict';

const aveiro = [
  'https://porto-north-portugal.com/images/650x450/costa-nova-portugal.jpg',
  'https://www.city-guide-porto.com/_bibli/pages_images/95/adobestock-dudlajzov-aveiro.jpg',
  'https://www.civitatis.com/f/portugal/coimbra/excursion-aveiro-589x392.jpg',
];
const lisboa = [
  'https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/08/25/61265facda507.r_d.627-417-9562.jpeg',
  'https://hips.hearstapps.com/hmg-prod/images/lisboa-1617630975.jpg',
  'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/02/15/istock-478897762.jpeg',
];
const lagos = [
  'https://www.iberian-escapes.com/images/Ponta-da-Piedade-lagos-portugal.jpg',
  'https://travelrebels.com/wp-content/uploads/2020/07/Wat-te-doen-in-Algarve-Portugal.jpg',
  'https://media.istockphoto.com/id/1276761128/es/foto/paisaje-con-praia-do-camilo.jpg?s=612x612&w=0&k=20&c=uvhiKbsMer1ATaOE9VOBFkNTQkL_7-EAd3KmaIgtvG8=',
];

const select = document.querySelector('#city');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const body = document.querySelector('body');

const handleClick = () => {
  console.log(select.value);
  if (select.value === 'aveiro') {
    img1.setAttribute('src', aveiro[0]);
    img2.setAttribute('src', aveiro[1]);
    img3.setAttribute('src', aveiro[2]);
  } else if (select.value === 'lisboa') {
    img1.setAttribute('src', lisboa[0]);
    img2.setAttribute('src', lisboa[1]);
    img3.setAttribute('src', lisboa[2]);
  } else {
    img1.setAttribute('src', lagos[0]);
    img2.setAttribute('src', lagos[1]);
    img3.setAttribute('src', lagos[2]);
  }
};
body.appendChild(img1);
body.appendChild(img2);
body.appendChild(img3);

select.addEventListener('change', handleClick);
