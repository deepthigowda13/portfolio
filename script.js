// ==========================================
// MODULE 6 - FINAL PORTFOLIO JAVASCRIPT
// ==========================================


// ==========================================
// 1. ELEMENTS
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const backToTop = document.getElementById("backToTop");
const currentYear = document.getElementById("currentYear");


// ==========================================
// 2. MOBILE MENU
// ==========================================

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        const isOpen =
            navLinks.classList.toggle("active");

        menuBtn.textContent =
            isOpen ? "✕" : "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuBtn.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });

}


// ==========================================
// 3. CLOSE MOBILE MENU
// ==========================================

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks && menuBtn) {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

});


// ==========================================
// 4. DARK / LIGHT MODE
// ==========================================

function updateThemeButton() {

    if (!themeBtn) {
        return;
    }

    if (document.body.classList.contains("dark")) {

        themeBtn.textContent = "☀️";

        themeBtn.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        themeBtn.setAttribute(
            "title",
            "Switch to light mode"
        );

    } else {

        themeBtn.textContent = "🌙";

        themeBtn.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        themeBtn.setAttribute(
            "title",
            "Switch to dark mode"
        );

    }

}


// Load saved theme

const savedTheme =
    localStorage.getItem("portfolioTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

}

updateThemeButton();


// Theme button

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark =
            document.body.classList.contains("dark");

        localStorage.setItem(
            "portfolioTheme",
            isDark ? "dark" : "light"
        );

        updateThemeButton();

    });

}


// ==========================================
// 5. SMOOTH SCROLLING
// ==========================================

const scrollLinks =
    document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const sectionId =
            this.getAttribute("href");

        if (
            !sectionId ||
            sectionId === "#"
        ) {
            return;
        }

        const section =
            document.querySelector(sectionId);

        if (section) {

            event.preventDefault();

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// 6. SCROLL ANIMATION
// ==========================================

const animatedElements =
    document.querySelectorAll(".animate-on-scroll");

if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    animatedElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    animatedElements.forEach(function (element) {

        element.classList.add("show");

    });

}


// ==========================================
// 7. CONTACT FORM VALIDATION
// ==========================================

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            // Clear old message

            if (formMessage) {

                formMessage.textContent = "";

                formMessage.className =
                    "form-message";

            }


            // Empty field validation

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                showFormMessage(
                    "Please fill in all fields.",
                    "error"
                );

                return;

            }


            // Email validation

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!emailPattern.test(email)) {

                showFormMessage(
                    "Please enter a valid email address.",
                    "error"
                );

                return;

            }


            // Minimum message length

            if (message.length < 10) {

                showFormMessage(
                    "Please enter a message with at least 10 characters.",
                    "error"
                );

                return;

            }


            // Successful front-end validation

            showFormMessage(
                "Thank you! Your message has been submitted successfully.",
                "success"
            );


            contactForm.reset();

        }
    );

}


// ==========================================
// FORM MESSAGE FUNCTION
// ==========================================

function showFormMessage(text, type) {

    if (!formMessage) {
        return;
    }

    formMessage.textContent = text;

    formMessage.classList.add(type);

}


// ==========================================
// 8. BACK TO TOP
// ==========================================

if (backToTop) {

    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        }
    );


    backToTop.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


// ==========================================
// 9. CURRENT YEAR
// ==========================================

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


// ==========================================
// 10. ESC KEY - CLOSE MOBILE MENU
// ==========================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            navLinks &&
            menuBtn
        ) {

            navLinks.classList.remove("active");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    }
);


// ==========================================
// 11. JAVASCRIPT STATUS
// ==========================================

console.log(
    "Portfolio website JavaScript loaded successfully."
);