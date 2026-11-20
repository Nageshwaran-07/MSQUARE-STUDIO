
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        menuToggle.textContent =
            navLinks.classList.contains("show") ? "✕" : "☰";

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";

        });

    });

}


// =========================
// CINEMATIC INTRO
// =========================
// =========================
// HERO ANIMATION
// =========================

const heroContent = document.querySelector(".hero-content");

if (heroContent) {
    heroContent.classList.add("animate-hero");
}
 else if (heroContent) {
    heroContent.classList.add("animate-hero");
}
/* ===== ABOUT SCROLL REVEAL ===== */

const aboutElements = document.querySelectorAll(
    '.about-heading, .about-description, .about-cta'
);

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            aboutObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

aboutElements.forEach((element) => {
    aboutObserver.observe(element);
});
// CV POPUP FUNCTIONALITY

const viewCV = document.getElementById("viewCV");
const cvModal = document.getElementById("cvModal");
const closeCV = document.getElementById("closeCV");

if (viewCV && cvModal && closeCV) {

    viewCV.addEventListener("click", function(e) {
        e.preventDefault();
        cvModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    closeCV.addEventListener("click", function() {
        cvModal.classList.remove("active");
        document.body.style.overflow = "";
    });

    cvModal.addEventListener("click", function(e) {
        if (e.target === cvModal) {
            cvModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            cvModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    });
}

// =================================
// OUR WORKS - PROJECT FILTER
// =================================

const filterButtons = document.querySelectorAll(".filter-btn");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        const selectedFilter = button.dataset.filter;

        // Show matching project cards
        workCards.forEach(card => {

            const cardCategory = card.dataset.category;

            if (
                selectedFilter === "all" ||
                selectedFilter === cardCategory
            ) {
                card.classList.remove("filter-hidden");
            } else {
                card.classList.add("filter-hidden");
            }

        });

    });

});
/* WORKS SCROLL ANIMATION - ALL DEVICES */

const revealCards = document.querySelectorAll(".work-card");

const worksRevealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
            worksRevealObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

revealCards.forEach(card => {
    worksRevealObserver.observe(card);
});