// =========================
// Portfolio JavaScript
// =========================

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Sticky Header
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// =========================
// Reveal Animation
// =========================

const revealElements = document.querySelectorAll(
    ".title, .about-box, .card, .project, .contact-box"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// Typing Effect
// =========================

const text = "Future Web Developer";
const typingTarget = document.querySelector(".hero h2");

let index = 0;

function typingEffect() {

    if (!typingTarget) return;

    if (index < text.length) {

        typingTarget.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);

    }

}

if (typingTarget) {

    typingTarget.textContent = "";

    typingEffect();

}

// =========================
// Skill Card Hover Animation
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// =========================
// Project Card Hover
// =========================

const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {

        project.style.transform = "translateY(-10px)";

    });

    project.addEventListener("mouseleave", () => {

        project.style.transform = "translateY(0px)";

    });

});

// =========================
// Back To Top Button
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// =========================
// Fade Hero Image
// =========================

const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.style.opacity = "0";

    window.addEventListener("load", () => {

        heroImage.style.transition = "1.5s";

        heroImage.style.opacity = "1";

    });

}

// =========================
// Console Welcome
// =========================

console.log("Welcome to Deepthi R Portfolio Website");

// =========================
// Current Year Footer
// =========================

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Deepthi R | Computer Science Engineering Student`;

}