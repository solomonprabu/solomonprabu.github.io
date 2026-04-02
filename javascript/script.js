const carousel = document.getElementById('carousel');
const slides = carousel.children;
let index = 0;

function updateCarousel() {
    // Ensure the index wraps around correctly
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    
    // Move the carousel by exactly 100% for each index
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    index++;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    index--;
    updateCarousel();
});


// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
// Initial setup
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    lightIcon.classList.add('opacity-100', 'rotate-0');
    lightIcon.classList.remove('opacity-0', '-rotate-90');
    darkIcon.classList.add('opacity-0', 'rotate-90');
    darkIcon.classList.remove('opacity-100', 'rotate-0');
} else {
    document.documentElement.classList.remove('dark');
    darkIcon.classList.add('opacity-100', 'rotate-0');
    darkIcon.classList.remove('opacity-0', 'rotate-90');
    lightIcon.classList.add('opacity-0', '-rotate-90');
    lightIcon.classList.remove('opacity-100', 'rotate-0');
}
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            // Switch to Light Mode
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            
            darkIcon.classList.add('opacity-100', 'rotate-0');
            darkIcon.classList.remove('opacity-0', 'rotate-90');
            lightIcon.classList.add('opacity-0', '-rotate-90');
            lightIcon.classList.remove('opacity-100', 'rotate-0');
        } else {
            // Switch to Dark Mode
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');

            lightIcon.classList.add('opacity-100', 'rotate-0');
            lightIcon.classList.remove('opacity-0', '-rotate-90');
            darkIcon.classList.add('opacity-0', 'rotate-90');
            darkIcon.classList.remove('opacity-100', 'rotate-0');
        }
    });
}