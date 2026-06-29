// Dynamic interaction handling for your portfolio website
document.addEventListener("DOMContentLoaded", () => {
    console.log("Creative Portfolio framework initialized successfully.");

    // Simple fade-in effect as the hiring manager scrolls down your CV
    const sections = document.querySelectorAll("section");
    
    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        fadeInOnScroll.observe(section);
    });
});
