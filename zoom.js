// zoom.js

document.addEventListener('DOMContentLoaded', function () {
    const gallerySection = document.querySelector('.zoom-section');
    const ifeheadImage = document.querySelector('.image-container img[src="ifehead.jpg"]');

    if (ifeheadImage) {
        window.addEventListener('scroll', () => {
            const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const zoomValue = 1 + scrollPercentage;

            ifeheadImage.style.transform = `scale(${zoomValue})`;
        });
    }
});
