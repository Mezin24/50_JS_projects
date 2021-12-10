const btn = document.querySelector('.ripple');

btn.addEventListener('click', function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const buttonTop = btn.getBoundingClientRect().top;
  const buttonLeft = btn.getBoundingClientRect().left;

  const xInside = x - buttonLeft;
  const yInside = y - buttonTop;

  const span = document.createElement('span');
  span.classList.add('circle');
  span.style.top = yInside + 'px';
  span.style.left = xInside + 'px';

  this.append(span);

  setTimeout(() => span.remove(), 500);
});
