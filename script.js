// ==========================================
// 1. MOBILE NAVIGATION MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Close menu when a navigation link is clicked
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
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
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }

    });

    // Remember user's theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }
}


// ==========================================
// 3. SMOOTH SCROLLING
// ==========================================

const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================================
// 4. SCROLL ANIMATION
// ==========================================

const animatedElements =
    document.querySelectorAll(".animate-on-scroll");

if (animatedElements.length > 0) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(function (element) {
        observer.observe(element);
    });

}


// ==========================================
// 5. CONTACT FORM VALIDATION
// ==========================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name");

        const email =
            document.getElementById("email");

        const message =
            document.getElementById("message");


        let isValid = true;


        // Remove old error messages

        document.querySelectorAll(".error-message")
            .forEach(function (error) {
                error.textContent = "";
            });


        // Name validation

        if (name && name.value.trim() === "") {

            showError(name, "Please enter your name.");

            isValid = false;
        }


        // Email validation

        if (email) {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email.value.trim() === "") {

                showError(
                    email,
                    "Please enter your email."
                );

                isValid = false;

            } else if (!emailPattern.test(email.value.trim())) {

                showError(
                    email,
                    "Please enter a valid email address."
                );

                isValid = false;
            }
        }


        // Message validation

        if (message && message.value.trim() === "") {

            showError(
                message,
                "Please enter your message."
            );

            isValid = false;
        }


        // Successful submission

        if (isValid) {

            alert("Message submitted successfully! 😊");

            contactForm.reset();

        }

    });

}


// Function to display errors

function showError(input, message) {

    let error = input.parentElement.querySelector(
        ".error-message"
    );

    if (!error) {

        error = document.createElement("small");

        error.className = "error-message";

        input.parentElement.appendChild(error);
    }

    error.textContent = message;
}


// ==========================================
// 6. BACK TO TOP BUTTON
// ==========================================

const topButton =
    document.getElementById("backToTop");

if (topButton) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ==========================================
// 7. CURRENT YEAR IN FOOTER
// ==========================================

const yearElement =
    document.getElementById("currentYear");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ==========================================
// JAVASCRIPT LOADED
// ==========================================

console.log("Portfolio JavaScript loaded successfully!");