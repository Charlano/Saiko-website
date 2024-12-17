const image = document.querySelector('.sticky-image');
const stopPoint = document.querySelector('.stop-point').offsetTop;

const leftH1 = document.querySelector('.left');
const rightH1 = document.querySelector('.right');

let slideIndex = 1; // Move this here to make sure it's defined early
let slideInterval;

function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

// Handle scroll to control sticky image position and show h1 elements
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY ;

    if (scrollY < stopPoint - ((window.innerHeight - vh(2)) / 2)) {
        image.style.position = 'fixed';
        image.style.top = '50%';
        image.style.transform = 'translateY(-50%)';
        leftH1.style.opacity = 0; // Hide the h1 elements
        rightH1.style.opacity = 0; // Hide the h1 elements
    } else {
        image.style.position = 'absolute';
        image.style.top = (stopPoint - image.offsetHeight / 2) + 'px';
        image.style.transform = 'none';
        
        // Show the h1 elements when the sticky image reaches the stop point
        leftH1.style.opacity = 1;
        rightH1.style.opacity = 1;
    }
});