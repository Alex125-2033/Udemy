"use sctrict";
let number0FFilms;

function start() {
    number0FFilms = +prompt("Сколько фильмов вы уже посмотрели?");

    while(number0FFilms == "" || number0FFilms == null ||  isNaN(number0FFilms)) {
        number0FFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
    
}

start();

const  personalMovieDB = {
    count : number0FFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0;i < 2; i++){
        const a = prompt("Один из последних просмотренных фильмов?"),
            b = prompt("Насколько вы его оцените?");

        if (a != null && b != null && a != "" && b != "" && a.length <= 50 && b.length <= 50) {
            console.log("Ответ принят")
            personalMovieDB.movies[a] = b;
        } else {
            console.log("Неверно введеное значение");
            i--;
        } 
    }
}

// rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель!");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка!");
}
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for( let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genders[i - 1] = genre;
        }
}

writeYourGenres();