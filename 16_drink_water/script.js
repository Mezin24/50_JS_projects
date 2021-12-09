const smallCups = document.querySelectorAll('.cup-small');

smallCups.forEach((cup, ind) => {
  cup.addEventListener('click', () => {
    fillInCup(ind);
  });
});

function fillInCup(ind) {
  smallCups.forEach((cup, i) => {
    if (
      smallCups[ind].classList.contains('full') &&
      !smallCups[ind].nextElementSibling.classList.contains('full')
    ) {
      ind--;
    }

    if (i <= ind) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
}
