const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  //   const btn = `
  //   <button class="btn">${sound}</button>
  //   `;
  //   document.querySelector('.buttons').insertAdjacentHTML('beforeend', btn);
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  document.querySelector('.buttons').append(btn);

  btn.addEventListener('click', () => {
    stopSound();
    document.getElementById(sound).play();
  });
});

function stopSound() {
  document.querySelectorAll('audio').forEach((sound) => {
    sound.pause();
    sound.currentTime = 0;
  });
}
