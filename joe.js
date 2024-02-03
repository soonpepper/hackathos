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
