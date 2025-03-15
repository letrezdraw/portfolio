document.addEventListener("mousemove", (event) => {
    const bgImg = document.querySelector(".HbgImg");
    if (!bgImg) return;

    // Get the initial transform position from CSS
    const initialX = -100; // The value from transform: translateX(-100px);

    // Get window size
    const { innerWidth: width, innerHeight: height } = window;

    // Calculate movement (opposite of mouse pointer)
    const moveX = initialX + (event.clientX - width / 2) * -0.02;
    const moveY = (event.clientY - height / 2) * -0.02;

    // Apply transform with smooth transition
    bgImg.style.transform = `translate(${moveX}px, ${moveY}px)`;
    bgImg.style.transition = "transform 0.2s ease-out"; // Smooth movement
});

document.addEventListener("DOMContentLoaded", function () {
    let scrollY = window.scrollY;
    let isScrolling = false;

    function smoothScroll(targetY) {
        isScrolling = true;
        let startY = window.scrollY;
        let startTime = performance.now();

        function animationStep(time) {
            let progress = Math.min((time - startTime) / 500, 1); // 500ms duration
            let ease = progress * (2 - progress); // Smooth easing function
            window.scrollTo(0, startY + (targetY - startY) * ease);

            if (progress < 1) {
                requestAnimationFrame(animationStep);
            } else {
                isScrolling = false;
            }
        }

        requestAnimationFrame(animationStep);
    }

    document.addEventListener("wheel", (event) => {
        if (isScrolling) return;
        event.preventDefault();

        let scrollAmount = window.innerHeight * 0.9; // Scroll almost 1 section
        scrollY += event.deltaY > 0 ? scrollAmount : -scrollAmount;
        smoothScroll(scrollY);
    });
});