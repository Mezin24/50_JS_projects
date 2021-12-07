const progress = document.querySelector('.progress');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const steps = document.querySelectorAll('.step');

let currentNumber = 1;

btnNext.addEventListener('click', function () {
  currentNumber++;

  if (currentNumber > steps.length) {
    currentNumber = steps.length;
  }

  update();
});

btnPrev.addEventListener('click', function () {
  currentNumber--;

  if (currentNumber < 1) {
    currentNumber = 1;
  }

  update();
});

function update() {
  steps.forEach((step, i) => {
    if (i < currentNumber) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = `${
    ((actives.length - 1) / (steps.length - 1)) * 100
  }%`;

  if (currentNumber === 1) {
    btnPrev.disabled = true;
  } else if (currentNumber === steps.length) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}
