let carousel = document.querySelector('.carousel-inner');
let slides = document.querySelectorAll('.carousel-item');
let currentIndex = 0;
let totalSlides = slides.length;
let interval = 3000; // Intervalo de cambio de diapositivas en milisegundos (3 segundos)

function changeSlide() {
    // Oculta la diapositiva actual
    slides[currentIndex].classList.remove('active');

    // Calcula el índice de la siguiente diapositiva
    currentIndex = (currentIndex + 1) % totalSlides;

    // Muestra la siguiente diapositiva
    slides[currentIndex].classList.add('active');
}

// Inicia el cambio automático de diapositivas
let slideInterval = setInterval(changeSlide, interval);
