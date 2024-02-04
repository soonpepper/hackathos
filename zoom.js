// zoom.js

// document.addEventListener('DOMContentLoaded', function () {
//     const gallerySection = document.querySelector('.zoom-section');
//     const ifeheadImage = document.querySelector('.image-container img[src="ifehead.jpg"]');

//     if (ifeheadImage) {
//         const zoomFactor = 0.02; // Adjust this value for the desired zoom speed
//         const zoomOrigin = { x: 0.5, y: 0.5 }; // Center of the image

//         ifeheadImage.addEventListener('mousemove', (event) => {
//             const bounds = event.target.getBoundingClientRect();
//             const x = event.clientX - bounds.left;
//             const y = event.clientY - bounds.top;
//             const xPercent = x / bounds.width;
//             const yPercent = y / bounds.height;

//             ifeheadImage.style.transformOrigin = `${xPercent * 100}% ${yPercent * 100}%`;
//             ifeheadImage.style.transform = `scale(${currentScale})`;
//         });

//         window.addEventListener('scroll', () => {
//             const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
//             const zoomValue = 1 + scrollPercentage * zoomFactor;

//             ifeheadImage.style.transformOrigin = `${zoomOrigin.x * 100}% ${zoomOrigin.y * 100}%`;
//             ifeheadImage.style.transform = `scale(${zoomValue})`;
//         });
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const ifeheadImage = document.querySelector('.image-container img[src="ifehead.jpg"]');

    if (ifeheadImage) {
        let zoomFactor = 0.02; // Adjust this value for the desired zoom speed
        let currentScale = 1;

        ifeheadImage.addEventListener('mousemove', (event) => {
            const bounds = event.target.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;
            const xPercent = x / bounds.width;
            const yPercent = y / bounds.height;

            ifeheadImage.style.transformOrigin = `${xPercent * 100}% ${yPercent * 100}%`;
            ifeheadImage.style.transform = `scale(${currentScale})`;
        });

        window.addEventListener('scroll', () => {
            const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            currentScale = 1 + scrollPercentage * zoomFactor;

            // Update the scale based on scroll, but keep the transform origin based on the last mouse position
            ifeheadImage.style.transform = `scale(${currentScale})`;
        });
    }
});