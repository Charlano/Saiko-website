let slideIndex = 1;

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let lines = document.getElementsByClassName("line");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < lines.length; i++) {
        lines[i].className = lines[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    lines[slideIndex - 1].className += " active";
}

// Initialize with the first slide displayed
showSlides(slideIndex);

function updateMediaSources() {
    const isSmallScreen = window.innerWidth < 800;

    // Video source change
    const video = document.querySelector('.hero-video source');
    if (video) {
        video.src = isSmallScreen 
            ? 'photos/foto e video sito web/saiko reel verticale web.mp4' 
            : 'photos/foto e video sito web/saiko orizzontale sito web.mp4';
        video.parentElement.load(); // Reload video to apply new source
    }

    // Image source changes
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

// Initial call and event listener for resizing
updateMediaSources();
window.addEventListener('resize', updateMediaSources);