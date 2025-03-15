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

gsap.to(".bottomBlur", {
    backdropFilter: "blur(40px)", // Strong blur at bottom
    webkitBackdropFilter: "blur(40px)",
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "body",
        start: "top bottom",
        end: "bottom top",
        scrub: true // Smoothly updates based on scroll
    }
});