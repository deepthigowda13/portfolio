// =============================
// Smooth Scroll for Navigation
// =============================

let links = document.querySelectorAll("nav a");

links.forEach(function(link) {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        let section = document.querySelector(this.getAttribute("href"));

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// =============================
// Welcome Message
// =============================

window.onload = function () {

    alert("Welcome to Deepthi R's Portfolio Website");

};

// =============================
// Change Header Color on Scroll
// =============================

window.addEventListener("scroll", function () {

    let header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#1565c0";

    } else {

        header.style.background = "#0d47a1";

    }

});

// =============================
// Button Click Message
// =============================

let hireBtn = document.querySelector(".btn");

hireBtn.addEventListener("click", function () {

    alert("Thank you for visiting my portfolio!");

});