
const button = document.getElementById('theme-toggle');

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('light')
  button.textContent = document.documentElement.classList.contains('light') ? '🌙' : '☀️'
  
});
