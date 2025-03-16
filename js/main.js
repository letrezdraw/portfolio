document.addEventListener("mousemove", (event) => {
    const bgImg = document.querySelector(".HbgImg");
    if (!bgImg) return;

    // Get the initial transform position from CSS
    const initialX = -150; // The value from transform: translateX(-100px);

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
    const imgBoxes = document.querySelectorAll(".pimg-box");

    imgBoxes.forEach((imgBox) => {
        const img = imgBox.querySelector(".pimg");

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

        animate(); // Start animation loop for each image box
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const pboxes = document.querySelectorAll(".pbox");

    pboxes.forEach((pbox) => {
        pbox.addEventListener("mousemove", function (e) {
            const rect = pbox.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Normalize values between -1 and 1
            const centerX = x - rect.width / 2;
            const centerY = y - rect.height / 2;

            // Calculate tilt (-10 to 10 degrees)
            const rotateX = (centerY / rect.height) * -15;
            const rotateY = (centerX / rect.width) * 15;

            // Apply tilt effect
            pbox.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            pbox.style.transition = "transform 0.1s ease-out"; // Smooth effect
        });

        pbox.addEventListener("mouseleave", function () {
            // Reset smoothly when mouse leaves
            pbox.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg)";
            pbox.style.transition = "transform 0.5s ease-out";
        });
    });
});



document.addEventListener("mousemove", (event) => {
    const bgImg = document.querySelector(".hero-image");
    if (!bgImg) return;

    // Get the initial transform position from CSS
    const initialX = 0; // The value from transform: translateX(-100px);

    // Get window size
    const { innerWidth: width, innerHeight: height } = window;

    // Calculate movement (opposite of mouse pointer)
    const moveX = initialX + (event.clientX - width / 2) * 0.02;
    const moveY = (event.clientY - height / 2) * 0.02;

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

document.querySelectorAll('a[href^="#"]').forEach(anchor => 
    {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let targetID = this.getAttribute("href").substring(1);
        let targetElement = document.getElementById(targetID);
        
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });

            // Remove hash from URL after scrolling
            history.pushState(null, null, " ");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scramble-text");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

    elements.forEach((element) => {
        let originalText = element.textContent;

        element.addEventListener("mouseenter", () => {
            let scrambledArray = originalText.split("");
            let i = 0;

            function scrambleNextChar() {
                if (i >= originalText.length) {
                    element.textContent = originalText; // Ensure it ends correctly
                    return;
                }

                scrambledArray = originalText
                    .split("")
                    .map((char, index) => {
                        if (char === " " || index <= i) {
                            return originalText[index]; // Keep spaces & revealed letters
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join("");

                element.textContent = scrambledArray;
                i++;

                setTimeout(scrambleNextChar, 50); // Controls speed
            }

            scrambleNextChar();
        });

        element.addEventListener("mouseleave", () => {
            element.textContent = originalText; // Instantly reset text
        });
    });
});
