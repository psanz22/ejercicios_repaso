'use strict';

console.log(window.scrollY);

const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('scroll', (ev) => {
  const scrollY = ev.target.scrollTop;

  console.log('scroll:', scrollY);

  if (scrollY < 250) {
    ev.currentTarget.classList.add('scrolling');
    ev.currentTarget.classList.remove('scrolling2');
  } else {
    ev.currentTarget.classList.add('scrolling2');
    ev.currentTarget.classList.remove('scrolling');
  }
});
