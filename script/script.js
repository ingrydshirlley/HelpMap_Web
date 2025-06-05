
  /* ADICIONAR CARD */
  const btnAddCard = document.querySelector('.btn-add-card');
  const cardAdd = document.querySelector('.card-add');
  const btnClose = document.querySelector('.btn-close');
  const btnCadastrar = document.querySelector('.card-add button');

  btnAddCard.addEventListener('click', () => {
    cardAdd.classList.add('show');
  });

  btnClose.addEventListener('click', () => {
    cardAdd.classList.remove('show');
  });

  btnCadastrar.addEventListener('click', () => {
    cardAdd.classList.remove('show');
  });


  /* MAPA INTERATIVO */
  const map = document.querySelector('.main-banner.mapa-interativo section .map');

  let isDragging = false;
  let startX, startY;
  let posX = 50, posY = 50; // background-position inicial em %

  map.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    map.style.cursor = 'grabbing';
  });

  map.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Ajuste de sensibilidade — quanto maior o divisor, mais lento o arrasto
posX -= dx / 10;
posY -= dy / 10;


    // Limites para não sair muito do mapa
    posX = Math.max(Math.min(posX, 100), 0);
    posY = Math.max(Math.min(posY, 100), 0);

    map.style.backgroundPosition = `${posX}% ${posY}%`;

    startX = e.clientX;
    startY = e.clientY;
  });

  map.addEventListener('mouseup', () => {
    isDragging = false;
    map.style.cursor = 'grab';
  });

  map.addEventListener('mouseleave', () => {
    isDragging = false;
    map.style.cursor = 'grab';
  });