// Your existing 3D model loading and interaction scripts

const header = document.querySelector('header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }

    prevScrollPos = currentScrollPos;
});

document.addEventListener('DOMContentLoaded', function () {
    const fadeElement = document.getElementById('fade-in-element');

    // Add the 'fade-in' class after a delay (e.g., 1 second)
    setTimeout(function () {
        fadeElement.classList.add('fade-in');
    }, 1000);
});