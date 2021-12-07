const boxes = document.querySelectorAll('.box');

document.addEventListener('scroll', showBoxes);

showBoxes();

function showBoxes() {
  const trigerHeight = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigerHeight) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}
