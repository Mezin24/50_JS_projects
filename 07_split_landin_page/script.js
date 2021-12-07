const container = document.querySelector('.container');
const leftSide = document.querySelector('.split.left');
const rightSide = document.querySelector('.split.right');

leftSide.addEventListener('mouseenter', () =>
  container.classList.add('left-active')
);
leftSide.addEventListener('mouseleave', () =>
  container.classList.remove('left-active')
);
rightSide.addEventListener('mouseenter', () =>
  container.classList.add('right-active')
);
rightSide.addEventListener('mouseleave', () =>
  container.classList.remove('right-active')
);
