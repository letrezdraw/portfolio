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

document.addEventListener("DOMContentLoaded", function () {
    const imgBox = document.querySelector(".pimg-box");
    const img = document.querySelector(".pimg");
    
    let xPos = 0, yPos = 0;
    let targetX = 0, targetY = 0;
    let speed = 0.1; // Smoothness factor
    let isHovering = false;

    imgBox.addEventListener("mouseenter", () => {
        isHovering = true;
    });

    imgBox.addEventListener("mouseleave", () => {
        isHovering = false;
    });

    imgBox.addEventListener("mousemove", function (e) {
        if (!isHovering) return;

        // Get mouse position relative to the container
        const rect = imgBox.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Move image in the opposite direction
        targetX = (rect.width / 2 - mouseX) / 10;
        targetY = (rect.height / 2 - mouseY) / 10;
    });

    function animate() {
        if (isHovering) {
            xPos += (targetX - xPos) * speed;
            yPos += (targetY - yPos) * speed;
            img.style.transform = `translate(${xPos}px, ${yPos}px)`;
        } else {
            // Reset position smoothly when mouse leaves
            xPos += (0 - xPos) * speed;
            yPos += (0 - yPos) * speed;
            img.style.transform = `translate(${xPos}px, ${yPos}px)`;
        }

        requestAnimationFrame(animate);
    }

    animate(); // Start animation loop
});

document.addEventListener("DOMContentLoaded", function () {
    const imgBoxes = document.querySelectorAll(".pbox");

    document.addEventListener("mousemove", function (e) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // Calculate tilt (-10 to 10 degrees)
        const rotateY = (mouseX / centerX) * 10; 
        const rotateX = (mouseY / centerY) * -10;

        // Apply the tilt effect to all `.pimg-box` elements
        imgBoxes.forEach(imgBox => {
            imgBox.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    });
});
