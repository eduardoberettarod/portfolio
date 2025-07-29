const projetosLink = document.querySelector('.projetos-link');
  const star = document.querySelector('.star');

  projetosLink.addEventListener('click', (e) => {
    e.preventDefault(); // Remove se quiser navegação
    star.classList.toggle('rotate');
  });