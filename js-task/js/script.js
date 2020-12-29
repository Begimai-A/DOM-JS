/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


// 1st TASK

const adds=document.querySelectorAll(".promo__adv img");
adds.forEach (item=> {
    item.remove();
});

// const adds=document.querySelectorAll(".promo__adv img");
// adds.forEach ( function (item) {
//     item.remove();
// });


// 2nd TASK

const genre=document.querySelector(".promo__genre");
genre.textContent="ДРАМА";

// 3rd TASK Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

const bgPoster=document.querySelector(".promo__bg");
bgPoster.style.backgroundImage='url("img/bg.jpg")';

// 4 and 5th th TASKS

const moviesList=document.querySelector(".promo__interactive-list");
moviesList.innerHTML=""; // this action deletes the content with the help of the empty "" marks

movieDB.movies.sort();

movieDB.movies.forEach((film, i) =>{
moviesList.innerHTML+=`
<li class="promo__interactive-item"> ${i+1}. ${film}
                            <div class="delete"></div>
                        </li>
`;
});








