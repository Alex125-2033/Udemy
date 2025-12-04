"use sctrict";
const number0FFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const  personalMovieDB = {
    count : number0FFilms,
    movies: {},
    actors: {},
    genders: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель!");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман!");
} else {
    console.log("Произошла ошибка!");
}

console.log(personalMovieDB);