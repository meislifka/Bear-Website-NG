document.querySelector('.overlay').addEventListener('click', () => {
  document.querySelector('.overlay').classList.add('hide');
});

document.querySelector('.box').addEventListener('click', () => {
  document.querySelector('.overlay').classList.remove('hide');
});