'use strict'
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрел', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Насколько вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Насколько вы его оцените?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
// personalMovieDB.movies.lastMovie = movieRate;

console.log(personalMovieDB);