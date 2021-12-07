const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
  const current = e.target;
  if (!current.classList.contains('card')) return;

  removeActiveClass();
  current.classList.add('active');
});

function removeActiveClass() {
  document.querySelectorAll('.card').forEach((card) => {
    card.classList.remove('active');
  });
}
