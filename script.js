// ==========================================
// 1. MOBILE MENU
// ==========================================

// Get the menu button
const menuBtn = document.getElementById("menuBtn");

// Get the navigation links
const navLinks = document.getElementById("navLinks");


// When the menu button is clicked
menuBtn.addEventListener("click", function () {

    // Add or remove the "active" class
    navLinks.classList.toggle("active");

});

// ==========================================
// 2. DARK / LIGHT MODE
// ==========================================

// Get the theme button
const themeBtn = document.getElementById("themeBtn");


// When theme button is clicked
themeBtn.addEventListener("click", function () {

    // Add or remove dark mode
    document.body.classList.toggle("dark");


    // Change the button icon
    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

    } else {

        themeBtn.textContent = "🌙";

    }

});

// ==========================================
// 3. CLOSE MOBILE MENU
// ==========================================

// Get all navigation links
const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        // Close the menu after clicking a link
        navLinks.classList.remove("active");

    });

});

// ==========================================
// 4. SMOOTH SCROLLING
// ==========================================

// Get all links that start with #
const scrollLinks =
    document.querySelectorAll('a[href^="#"]');


scrollLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // Stop normal link behaviour
        event.preventDefault();


        // Get the section ID
        const sectionId =
            this.getAttribute("href");


        // Find that section
        const section =
            document.querySelector(sectionId);


        // Scroll smoothly to the section
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

// Get elements with animation class
const animatedElements =
    document.querySelectorAll(
        ".animate-on-scroll"
    );

// Create an observer
const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            // Check if element is visible
            if (entry.isIntersecting) {

                // Add "show" class
                entry.target.classList.add("show");

            }

        });

    });


// Watch all animated elements
animatedElements.forEach(function (element) {

    observer.observe(element);

});

// ==========================================
// 6. CONTACT FORM VALIDATION
// ==========================================

// Get contact form
const contactForm =
    document.getElementById("contactForm");


// When form is submitted
contactForm.addEventListener("submit", function (event) {

    // Stop form from refreshing the page
    event.preventDefault();

    // Get input values
    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();

    // Get error message elements
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

    // Assume form is correct
    let valid = true;

    // Check name
    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        valid = false;

    }

    // Check email
    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    }

    // Check subject
    if (subject === "") {

        subjectError.textContent =
            "Please enter a subject.";

        valid = false;

    }

    // Check message
    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        valid = false;

    }

    // If everything is correct
    if (valid) {

        successMessage.textContent =
            "Message submitted successfully!";

        // Clear the form
        contactForm.reset();

    }

});

// ==========================================
// 7. BACK TO TOP BUTTON
// ==========================================

// Get back-to-top button
const backToTop =
    document.getElementById("backToTop");


// Check scrolling
window.addEventListener("scroll", function () {

    // If user scrolls more than 400px
    if (window.scrollY > 400) {

        // Show button
        backToTop.classList.add("show");

    } else {

        // Hide button
        backToTop.classList.remove("show");

    }

});

// When back-to-top button is clicked
backToTop.addEventListener("click", function () {

    // Go to top smoothly
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
// JAVASCRIPT LOADED
// ==========================================

console.log(
    "JavaScript is working successfully!"
);