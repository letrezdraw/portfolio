document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = this.getAttribute("href");

        // GSAP Jelly Warp Effect
        gsap.fromTo(".warp-overlay", 
            { scale: 0, opacity: 1 }, 
            { scale: 10, opacity: 0, duration: 1, ease: "elastic.out(1, 0.5)" }
        );

        setTimeout(() => {
            window.location.hash = target;
        }, 1000);
    });
});