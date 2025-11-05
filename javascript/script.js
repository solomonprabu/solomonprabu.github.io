// Simple Carousel Logic
const carousel = document.getElementById('carousel');
const slides = carousel.children;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
    index = (index + 1) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});