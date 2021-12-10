const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=cc24ff3fa49d1fbd09cb66a88b66f699&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=cc24ff3fa49d1fbd09cb66a88b66f699&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
  console.log(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';

  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview } = movie;

    const html = `
    <div class="movie">
        <img
        src="${IMG_PATH + poster_path}"
        alt="movie"
        />
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getRatingColor(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            <p>${overview}</p>
        </div>
    </div>`;

    // const html = `<div class="movie">
    //     <img src="${IMG_PATH + poster_path}">
    // </div>`;

    main.insertAdjacentHTML('beforeend', html);
  });
}

function getRatingColor(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
