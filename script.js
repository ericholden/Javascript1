'use strict'
let numberOfFilms;


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрел', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрел', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// }

// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2): 

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     let a1 = prompt('Ваш любимы жанр под номером 1:', '');
//     let a2 = prompt('Ваш любимы жанр под номером 2:', '');
//     let a3 = prompt('Ваш любимы жанр под номером 3:', '');
//     personalMovieDB.genres[0] = a1;
//     personalMovieDB.genres[1] = a2;
//     personalMovieDB.genres[2] = a3;
// }

// writeYourGenres();



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимы жанр под номером ${i}`);
    }

}

writeYourGenres();