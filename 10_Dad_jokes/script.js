const jokeEl = document.getElementById('joke');
const btnJoke = document.getElementById('joke-btn');

// function getJoke() {
//   return new Promise((res) => {
//     fetch('https://icanhazdadjoke.com/', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => (jokeEl.textContent = data.joke));
//   });
// }

async function getJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  jokeEl.textContent = data.joke;
}

getJoke();

btnJoke.addEventListener('click', getJoke);
