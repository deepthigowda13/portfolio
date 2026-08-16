// ==========================================
// 1. MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});
// ==========================================
// 2. DARK / LIGHT MODE
// ==========================================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});
// ==========================================
// 3. CLOSE MOBILE MENU
// ==========================================

const links =
    document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

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


        // Don't do anything for href="#"
        if (sectionId === "#") {

            return;

        }
        event.preventDefault();

        const section =
            document.querySelector(sectionId);


        if (section) {

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
    document.querySelectorAll(
        ".animate-on-scroll"
    );

const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

animatedElements.forEach(function (element) {

    observer.observe(element);

});

// ==========================================
// 6. CONTACT FORM VALIDATION
// ==========================================
const contactForm =
    document.getElementById("contactForm");

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

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const subjectError =
        document.getElementById("subjectError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");

    // Clear old messages

    nameError.textContent = "";

    emailError.textContent = "";

    subjectError.textContent = "";

    messageError.textContent = "";

    successMessage.textContent = "";

    let valid = true;
    // NAME
    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }
    // EMAIL
    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    }
    // SUBJECT
    if (subject === "") {

        subjectError.textContent =
            "Please enter a subject.";

        valid = false;

    }
    // MESSAGE
    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        valid = false;

    }
    // SUCCESS

    if (valid) {

        successMessage.textContent =
            "Message submitted successfully!";

        contactForm.reset();

    }

});
// ==========================================
// 7. BACK TO TOP
// ==========================================

const backToTop =
    document.getElementById("backToTop");


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

// ==========================================
// 8. CURRENT YEAR
// ==========================================
const currentYear =
    document.getElementById("currentYear");

currentYear.textContent =
    new Date().getFullYear();

// ==========================================
// 9. JAVASCRIPT CHECK
// ==========================================
console.log(
    "Module 3 + Module 4 JavaScript is working!"
);