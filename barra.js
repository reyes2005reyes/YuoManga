const toggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
toggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});



const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-bnt.prev');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1 ) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
});