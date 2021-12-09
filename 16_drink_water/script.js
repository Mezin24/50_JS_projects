const smallCups = document.querySelectorAll('.cup-small');
const percentages = document.querySelector('.percentages');
const remained = document.querySelector('.remained');
const liters = document.querySelector('#liters');

fillCup();

smallCups.forEach((cup, ind) => {
  cup.addEventListener('click', () => {
    highlightCups(ind);
  });
});

function highlightCups(ind) {
  if (
    smallCups[ind].classList.contains('full') &&
    !smallCups[ind].nextElementSibling?.classList.contains('full')
  ) {
    ind--;
  }
  smallCups.forEach((cup, i) => {
    if (i <= ind) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  fillCup();
}

function fillCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentages.style.visibility = 'hidden';
    percentages.style.height = '0px';
  } else {
    percentages.style.visibility = 'visible';
    percentages.style.height = `${(fullCups / totalCups) * 100}%`;
    percentages.textContent = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = '0';
  } else {
    remained.style.visibility = 'visible';
    remained.style.height = 'auto';
    liters.textContent = `${2 - (250 * fullCups) / 1000}L`;
  }

  console.log(totalCups);
}
