document.addEventListener('DOMContentLoaded', () => {
  // 1. Captura os elementos da tela pelos IDs
  const bannerCookies = document.getElementById('banner-cookies');
  const btnAceitar = document.getElementById('btn-aceitar-cookies');

  // Proteção: verifica se os elementos realmente existem na página antes de continuar
  if (!bannerCookies || !btnAceitar) return;

  // 2. Verifica se o usuário já aceitou os cookies anteriormente
  const cookiesAceitos = localStorage.getItem('cookiesAceitos');

  if (cookiesAceitos === 'sim') {
    bannerCookies.classList.add('oculto');
  }

  // 3. Adiciona o evento de clique no botão
  btnAceitar.addEventListener('click', () => {
    localStorage.setItem('cookiesAceitos', 'sim');
    bannerCookies.classList.add('oculto');
  });
});