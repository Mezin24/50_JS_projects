const toggle = document.querySelector('.toggle');
const hourEl = document.querySelector('.hour');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

toggle.addEventListener('click', function (e) {
  const html = document.querySelector('html');

  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML = 'Dark mode';
  } else {
    html.classList.add('dark');
    e.target.innerHTML = 'Light mode';
  }
});

function setTime() {
  const time = new Date();
  const date = time.getDate();
  const day = days[time.getDay()];
  const month = months[time.getMonth()];
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hours < 12 ? 'AM' : 'PM';

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;

  minutesEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;

  secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock === 0 ? '12' : hoursForClock}:${addZero(
    minutes
  )} <small>${ampm}</small>`;

  dateEl.innerHTML = `${day}, ${month}  <span class="circle">${date}</span>`;
}

function addZero(num) {
  return num < 10 ? `0${{ num }}` : num;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

setTime();
setInterval(setTime, 1000);
