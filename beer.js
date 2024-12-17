let currentIndex = 0; // Start with the first slide
const slides = document.querySelectorAll('.slide');

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'flex' : 'none'; // Show only the current slide
    });
}

// Show the first slide on load
showSlide(currentIndex);

// Arrow button event listeners
document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to last slide if index goes below 0
    showSlide(currentIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Loop to first slide if index exceeds the last
    showSlide(currentIndex);
});
