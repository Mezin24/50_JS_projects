// const textArea = document.getElementById('textarea');
// const choicesContainer = document.querySelector('.tags');

// textArea.focus();

// textArea.addEventListener('keyup', (e) => {
//   createTags(e.target.value);

//   if (e.key === 'Enter') {
//     setTimeout(() => (e.target.value = ''), 10);
//     randomSelect();
//   }
// });

// function createTags(input) {
//   const tags = input
//     .split(',')
//     .filter((tag) => tag.trim() !== '')
//     .map((tag) => tag.trim());

//   choicesContainer.innerHTML = '';

//   tags.forEach((tag) => {
//     const html = `<span class="tag">${tag}</span>`;
//     choicesContainer.insertAdjacentHTML('beforeend', html);
//   });
// }

// function randomSelect() {
//   const times = Math.floor(Math.random() * (30 - 10 + 1) + 10);

//   const interval = setInterval(() => {
//     const tag = randomTag();
//     highlight(tag);

//     setTimeout(() => {
//       removehighlight(tag);
//     }, 100);
//   }, 100);

//   setTimeout(() => {
//     clearInterval(interval);
//     setTimeout(() => {
//       const randTag = randomTag();

//       highlight(randTag);
//     });
//   }, 100 * times);
// }
// function highlight(tag) {
//   tag.classList.add('highlight');
// }
// function removehighlight(tag) {
//   tag.classList.remove('highlight');
// }
// function randomTag() {
//   const tags = document.querySelectorAll('.tag');
//   return tags[Math.floor(Math.random() * tags.length)];
// }

// ///////////////////////////////
const textarea = document.getElementById('textarea');
const tagsContainer = document.querySelector('.tags');

textarea.focus();

window.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      textarea.value = '';
    }, 10);
    randomSelect();
  }
});

function randomSelect() {
  const times = Math.floor(Math.random() * (30 - 10 + 1) + 10);

  const interval = setInterval(() => {
    const tag = randomTag();

    highlightTag(tag);

    setTimeout(() => {
      unhighlightTag(tag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const choice = randomTag();
      highlightTag(choice);
    }, 100);
  }, times * 100);
}

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsContainer.innerHTML = '';

  tags.forEach((tag) => {
    const span = document.createElement('span');
    span.classList.add('tag');
    span.innerText = tag;
    tagsContainer.append(span);
  });
}

function randomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}
function unhighlightTag(tag) {
  tag.classList.remove('highlight');
}
