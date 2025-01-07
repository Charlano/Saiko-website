const hamburger = document.getElementById('hamburger');
    const fullscreenMenu = document.getElementById('fullscreen-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('activated');
      fullscreenMenu.classList.toggle('activated');
 });
