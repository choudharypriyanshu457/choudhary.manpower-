// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your enquiry has been received. Choudhary Manpower will contact you soon.");
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header Shadow on Scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 15px rgba(255,215,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }
});