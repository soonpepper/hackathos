// zoom.js

document.addEventListener('DOMContentLoaded', function () {
    const gallerySection = document.querySelector('.zoom-section');
    const ifeheadImage = document.querySelector('.image-container img[src="ifehead.jpg"]');

    if (ifeheadImage) {
        const zoomFactor = 0.02; // Adjust this value for the desired zoom speed
        const zoomOrigin = { x: 0.5, y: 0.5 }; // Center of the image

        window.addEventListener('scroll', () => {
            const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const zoomValue = 1 + scrollPercentage * zoomFactor;

            ifeheadImage.style.transformOrigin = `${zoomOrigin.x * 100}% ${zoomOrigin.y * 100}%`;
            ifeheadImage.style.transform = `scale(${zoomValue})`;
        });
    }
});