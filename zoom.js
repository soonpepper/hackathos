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
        let zoomFactor = 2; // This is the zoom level when the mouse is over the image

        ifeheadImage.addEventListener('mousemove', (event) => {
            const bounds = ifeheadImage.getBoundingClientRect();
            const x = event.clientX - bounds.left;
            const y = event.clientY - bounds.top;

            // Convert the cursor's position to a percentage of the image's dimensions
            const xPercent = (x / bounds.width) * 100;
            const yPercent = (y / bounds.height) * 100;

            ifeheadImage.style.transformOrigin = `${xPercent}% ${yPercent}%`;
            ifeheadImage.style.transform = `scale(${zoomFactor})`;
        });

        ifeheadImage.addEventListener('mouseleave', () => {
            ifeheadImage.style.transform = 'scale(1)';
            ifeheadImage.style.transformOrigin = 'center';
        });
    }
});