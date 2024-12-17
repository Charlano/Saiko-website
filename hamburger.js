const hamburger = document.getElementById('hamburger');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      fullscreenMenu.classList.toggle('active');
 });
