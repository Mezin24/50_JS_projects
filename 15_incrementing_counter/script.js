const counts = document.querySelectorAll('.count');

counts.forEach((count) => {
  count.innerHTML = '0';

  const target = +count.getAttribute('data-target');

  //   const increment = Math.ceil(target / 200);
  const increment = 5;
  console.log(increment);

  const incrementTarget = () => {
    const added = +count.textContent;

    if (added < target) {
      count.textContent = added + increment;

      setTimeout(() => incrementTarget(), 10);
    } else {
      count.textContent = target;
    }
  };

  incrementTarget();
});
