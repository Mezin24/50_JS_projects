const btn = document.getElementById('toggle');

btn.addEventListener('click', function () {
  this.closest('nav').classList.toggle('active');
});
