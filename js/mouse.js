const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".cir");

// Set initial position for circles
circles.forEach((circle) => {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY + window.scrollY; // Adjust for scroll position
});

function animateCircle() {
    circles.forEach((circle, index) => {
        // Apply easing for smooth effect
        circle.x += (coords.x - circle.x) * 0.1;
        circle.y += (coords.y - circle.y) * 0.1;

        // Adjust offsets based on new size (480px)
        circle.style.left = circle.x - 240 + "px"; // Half of 480
        circle.style.top = circle.y - 240 + "px";  // Half of 480
    });

    requestAnimationFrame(animateCircle);
}

animateCircle();
