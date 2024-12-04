let currentSlide = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}, 3000);

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}