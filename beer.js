const slides = document.querySelectorAll('.slide');
const content = document.getElementById('content');
const dotsContainer = document.getElementById('slider-dots');

const slideTexts = [

    //changes
    {
        description: 'La nostra birra più leggera e versatile, una PILS (lager) che esprime tutta la purezza della tradizione birraria giapponese. Fresca e dissetante, è l’abbinamento perfetto per una cena a base di riso, zuppe ma anche involtini primavera, uramaki e tanti altri.',
        nutritionalInfo: [
            { label: 'Volume', value: '0,33L' },
            { label: 'Alcohol', value: '4,8%vol.' },
            { label: 'Ingredienti', value: 'acqua, malto d\'orzo, frumento, avena, lievito' },
        ],
        pretitle: 'Fresca e versatile',
        title: 'Informazioni sulla birra Yukio',
        imgSrc: 'photos/DSC03886-54.jpg',
    },
    {
        description: 'Birra IPA che, grazie al suo perfetto equilibrio tra l\'amarezza del luppolo e la dolcezza del malto caramellato, si abbina perfettamente a piatti piccanti o a qualsiasi piatto fritto (come la tempura) che desideri offrire ai tuoi clienti.',
        nutritionalInfo: [
            { label: 'Volume', value: '0,33L' },
            { label: 'Alcohol', value: '6%vol.' },
            { label: 'Ingredienti', value: 'acqua, malto d\'orzo, luppolo, lievito' },
        ],
        pretitle: 'Elegante ed agrumato',
        title: 'Informazioni sulla birra Itoku',
        imgSrc: 'photos/DSC03729-21 ph.jpg',
    },
    {
        description: 'Birra BLANCHE molto pregiata, caratterizzata da una luppolatura con la varietà CASCADE e arricchita dall’aggiunta di scorza d’arancia amara. Perfetta per accompagnare il sashimi, si sposa magnificamente con tutti i piatti a base di pesce.',
        nutritionalInfo: [
            { label: 'Volume', value: '0,33L' },
            { label: 'Alcohol', value: '4,3%vol.' },
            { label: 'Ingredienti', value: 'acqua, malto d\'orzo, fiocchi di frumento, luppolo, lievito, buccia d\'arancia'},
        ],
        pretitle: 'Intenso ma bilanciato',
        title: 'Informazioni sulla birra Sujin',
        imgSrc: 'photos/DSC03709-9 ph.jpg',
    },
];

let currentIndex = 0;

function updateSlider(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });

    const slideData = slideTexts[index];
    document.querySelector('.nutrition-info table').innerHTML = slideData.nutritionalInfo
        .map(item => `<tr><th>${item.label}</th><td>${item.value}</td></tr>`)
        .join('');
    document.querySelector('.info-section .pretitle').textContent = slideData.pretitle;
    document.querySelector('.info-section .title').textContent = slideData.title;
    document.querySelector('.info-section .description').textContent = slideData.description;
    document.querySelector('.image-section .beer-image').src = slideData.imgSrc;

    document.querySelectorAll('.dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    updateSlider(currentIndex);
}

function goToSlide(index) {
    currentIndex = index;
    updateSlider(currentIndex);
}

function getSlideFromURL() {
    const params = new URLSearchParams(window.location.search);
    const slideParam = params.get('slide');
    return slideParam ? parseInt(slideParam, 10) : 0;
}

document.addEventListener('DOMContentLoaded', () => {
    const initialSlide = getSlideFromURL();

    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === currentIndex) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    goToSlide(initialSlide);
});
