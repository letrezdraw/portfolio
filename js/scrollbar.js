document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    let scrollSpeed = 1; // Adjust speed if needed
    let isPaused = false;

    // Clone images for seamless scroll
    function duplicateImages() {
        const images = [...gallery.children];
        images.forEach((img) => {
            const clone = img.cloneNode(true);
            gallery.appendChild(clone);
        });
    }
    duplicateImages();

    // Scroll function
    function autoScroll() {
        if (!isPaused) {
            gallery.scrollLeft += scrollSpeed;
            if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
                gallery.scrollLeft = 0;
            }
        }
        requestAnimationFrame(autoScroll);
    }

    autoScroll(); // Start scrolling

    // Pause scrolling on hover
    gallery.addEventListener("mouseenter", () => (isPaused = true));
    gallery.addEventListener("mouseleave", () => (isPaused = false));
});