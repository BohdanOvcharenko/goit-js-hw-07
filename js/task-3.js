const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (e) => {
  if (e.target.value.trim() === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = e.target.value.trim();
  }
});