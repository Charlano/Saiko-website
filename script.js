let slideIndex = 1;
let startX = 0;
let isDragging = false;

// Display the initial slide
showSlides(slideIndex);

// Navigate to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show the appropriate slide based on slideIndex
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let lines = document.getElementsByClassName("line");

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < lines.length; i++) {
        lines[i].className = lines[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    lines[slideIndex - 1].className += " active";
}

// Handle swipe gestures
const slider = document.querySelector('.slider');
slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
});
slider.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
});
slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 50) {
        isDragging = false;
        deltaX > 0 ? currentSlide(slideIndex - 1) : currentSlide(slideIndex + 1);
    }
});
slider.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    if (Math.abs(deltaX) > 50) {
        isDragging = false;
        deltaX > 0 ? currentSlide(slideIndex - 1) : currentSlide(slideIndex + 1);
    }
});
slider.addEventListener('mouseup', () => (isDragging = false));
slider.addEventListener('mouseleave', () => (isDragging = false));
slider.addEventListener('touchend', () => (isDragging = false));

// Media source updates for responsiveness
function updateMediaSources() {
    const isSmallScreen = window.innerWidth < 800;

    const video = document.querySelector('.hero-video source');
    if (video) {
        video.src = isSmallScreen 
            ? 'photos/foto e video sito web/saiko reel verticale web.mp4' 
            : 'photos/foto e video sito web/saiko orizzontale sito web.mp4';
        video.parentElement.load();
    }

    const images = document.querySelectorAll('.slide img');
    if (images.length) {
        images[0].src = isSmallScreen 
            ? 'photos/foto e video sito web/verticale homepage 1.jpg' 
            : 'photos/foto e video sito web/orizzont homepage.jpg';
        images[1].src = isSmallScreen 
            ? 'photos/foto e video sito web/verticale homepage 2.jpg' 
            : 'photos/foto e video sito web/orizzont homepage 2.jpg';
    }
}
updateMediaSources();
window.addEventListener('resize', updateMediaSources);
