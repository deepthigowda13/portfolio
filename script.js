// ==========================================
// 1. MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// ==========================================
// 2. DARK / LIGHT MODE
// ==========================================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeBtn.textContent = "☀️";

        } else {

            themeBtn.textContent = "🌙";

        }

    });

}


// ==========================================
// 3. CLOSE MOBILE MENU
// ==========================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });

});


// ==========================================
// 4. SMOOTH SCROLLING
// ==========================================

const scrollLinks =
    document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const sectionId =
            this.getAttribute("href");

        // Ignore empty # links
        if (!sectionId || sectionId === "#") {
            return;
        }

        const section =
            document.querySelector(sectionId);

        if (section) {

            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================================
// 5. SCROLL ANIMATION
// ==========================================

const animatedElements =
    document.querySelectorAll(".animate-on-scroll");

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {
            threshold: 0.1
        });


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    // Fallback for browsers without IntersectionObserver

    animatedElements.forEach(function (element) {

        element.classList.add("show");

    });

}


// ==========================================
// 6. CONTACT FORM VALIDATION
// ==========================================

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Clear previous message

        if (formMessage) {
            formMessage.textContent = "";
        }


        // Check empty fields

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            if (formMessage) {

                formMessage.textContent =
                    "Please fill in all fields.";

            }

            return;

        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            if (formMessage) {

                formMessage.textContent =
                    "Please enter a valid email address.";

            }

            return;

        }


        // Success

        if (formMessage) {

            formMessage.textContent =
                "Thank you! Your message has been submitted.";

        }


        contactForm.reset();

    });

}


// ==========================================
// 7. BACK TO TOP
// ==========================================

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==========================================
// 8. CURRENT YEAR
// ==========================================

const currentYear =
    document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


// ==========================================
// 9. JAVASCRIPT CHECK
// ==========================================

console.log(
    "Module 4 + Module 5 JavaScript is working!"
);