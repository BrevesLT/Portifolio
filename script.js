
const button = document.getElementById('theme-toggle');

button.addEventListener('click', () => {
  document.documentElement.classList.toggle('light')
  button.textContent = document.documentElement.classList.contains('light') ? '🌙' : '☀️'
  
});

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const projetosContainer = document.querySelector('.projetos-container');
const projetos = document.querySelectorAll('article');
const larguraProjeto = projetos[0].offsetWidth + 100;

let projeto = 1;
let intervalo;

function updateProjeto() {
  if (projeto > projetos.length) {
    projeto = 1;
  } else if (projeto < 1) {
    projeto = projetos.length;
  }

  projetosContainer.style.transform = `translateX(-${(projeto - 1) * larguraProjeto}px)`;

  intervalo = setTimeout(() => {
    projeto++;
    updateProjeto();

  }, 4000);
}

prevButton.addEventListener('click', () => {
  projeto--;
  clearTimeout(intervalo);
  updateProjeto();
});

nextButton.addEventListener('click', () => {
  projeto++;
  clearTimeout(intervalo);
  updateProjeto();
});

updateProjeto();



