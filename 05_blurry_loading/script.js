const text = document.getElementById('text-loading');
const bg = document.getElementById('bg');

let loading = 0;

const int = setInterval(bluring, 30);

function bluring() {
  loading++;

  if (loading > 99) {
    clearInterval(int);
  }

  text.textContent = `${loading}%`;
  text.style.opacity = `${scale(loading, 0, 100, 1, 0)}`;
  bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
