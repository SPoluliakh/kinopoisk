import { getWatchedItems } from './local-storage';
import { getQueueItems } from './local-storage';
import { getGenreOptions } from './local-storage';
import { listRef } from '../refs/refs'

const watchedBtn = document.querySelector('.watched-button')
const queueBtn = document.querySelector('.queue-button')
const div = document.querySelector('.empty-lib')
console.log(div);
watchedBtn.addEventListener('click', onWatchedBtn)
queueBtn.addEventListener('click', onQueueBtn)


// рендер фильмов при открытии страницы

onWatchedBtn()


// наажтие кнопок

function onWatchedBtn(e) { 

    watchedBtn.classList.add("active-button")
    queueBtn.classList.remove("active-button")

    const localStorageWathed = getWatchedItems();

    if (localStorageWathed.length === null) {
        let markupTorender = makeEmptyList();
        makeEmptyRender(markupTorender);
    } else {let markupTorender = makeFilmCard(localStorageWathed);
        makeRender(markupTorender);}
    
}

function onQueueBtn(e) { 

    queueBtn.classList.add("active-button")
    watchedBtn.classList.remove("active-button")

    const localStorageQueue = getQueueItems();
    
    if (localStorageQueue === null) {
        let markupTorender = makeEmptyList();
        makeEmptyRender(markupTorender);
    } else {let markupTorender = makeFilmCard(localStorageQueue);
        makeRender(markupTorender)}
    
}

// создание карточки с фильмами

function makeFilmCard(films) {
    const murkup = films
    .map(
    ({
        poster_path,
        title,
        genre_ids,
        release_date,
        id,
    }) => `<li class="movie-card" data-id="${id}">
    <img class="movie-card__img" src=${
    poster_path
        ? `https://image.tmdb.org/t/p/original/${poster_path}`
        : `${img}`
    } alt="${title}" data-id="${id}"/>
    <div class="movie-card__info" data-id="${id}">
    <h2 class="movie-card__title"data-id="${id}">${title}</h2>

    </div>
</li>
`
    )
    .join('');;
    return murkup;
}

// создание заглушки если фильмы не выбраны

function makeEmptyList() { 
    return `<p>unfortunately there are no movies added to the library</p>`
}

// рендер карточек на страницу

function makeRender(markupTorender) {
    listRef.innerHTML = markupTorender;
}
function makeEmptyRender(markupTorender) { 
    div.innerHTML = markupTorender
}