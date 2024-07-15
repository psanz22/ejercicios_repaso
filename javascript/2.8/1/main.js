'use strict';

const workWithMovies = () => {
  const movies = ['Martyrs', 'It Follows', 'Teekonkinkreet'];

  movies[3] = 'Una Rubia muy Legal';

  console.log(movies);

  movies[1] = 'Dos rubias de pelo en pecho';

  console.log(movies);
};

workWithMovies();
