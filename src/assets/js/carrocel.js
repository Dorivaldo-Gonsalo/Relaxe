// JavaScript para tornar o carrossel funcional
const wrapper = document.querySelector('.items-wrapper');
const items = document.querySelectorAll('.item');
const totalItems = items.length;
let currentIndex = 0;

// Funcão para atualizar a posição do carrossel
function showItem(index) {
  // Garantir que o index esteja dentro do intervalo
  if (index >= totalItems) index = 0;
  if (index < 0) index = totalItems - 1;
  currentIndex = index;
  // Movimentar o wrapper
  wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Eventos para os botões
document.getElementById('next').addEventListener('click', () => {
  showItem(currentIndex + 1);
});

document.getElementById('prev').addEventListener('click', () => {
  showItem(currentIndex - 1);
});

// Opcional: auto-avançar a cada 3 segundos
setInterval(() => {
  showItem(currentIndex + 1);
}, 3000);