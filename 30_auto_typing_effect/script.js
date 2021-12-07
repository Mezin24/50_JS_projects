const titleEl = document.querySelector('h1');
const speedEl = document.querySelector('#number');
const text = 'We like programming!';
let speed = 300 / speedEl.value;

let ind = 0;
displayText();

function displayText() {
  titleEl.textContent = text.slice(0, ind);
  ind++;
  if (ind > text.length) {
    ind = 0;
  }
  setTimeout(displayText, speed);
}

speedEl.addEventListener('change', (e) => (speed = 300 / e.target.value));
