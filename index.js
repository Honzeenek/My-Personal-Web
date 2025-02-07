// Select elements - grouped at the top for single source of truth
const navCircle = document.getElementById("nav-circle");
const hiddenNav = document.querySelector(".off-screen-menu");
const overlay = document.querySelector("#overlay");
const dropdownBtn = document.querySelector(".btn");
const dropdownContent = document.querySelector(".dropdown-content");
const arrow = document.querySelector(".arrow");

// Function to handle scroll events
function handleScroll() {
    const nav = document.querySelector('nav');

    // Toggle nav visibility based on scroll
    if (window.scrollY > 50) {
        nav.classList.add("nav-hidden");
        dropdownContent.classList.remove("show");
    } else {
        nav.classList.remove("nav-hidden");
    }

    // Toggle nav circle visibility based on scroll
    if (window.scrollY > 80) {
        navCircle.classList.remove("nav-circle-hidden");
    } else {
        navCircle.classList.add("nav-circle-hidden");
    }
}

// Function to handle nav circle click
function handleNavCircleClick() {
    navCircle.classList.toggle("active");
    hiddenNav.classList.toggle("active");

    if (navCircle.classList.contains("active")) {
        document.body.style.overflowY = "hidden";
        overlay.classList.add("visible");
    } else {
        document.body.style.overflowY = "scroll";
        overlay.classList.remove("visible");
    }
}

// Function to handle dropdown button click
function handleDropdownClick() {
    dropdownContent.classList.toggle("show");
    arrow.classList.toggle('rotate');
}

// Function to handle outside click for dropdown
function handleOutsideClick(event) {
    if (!event.target.matches(".btn")) {
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
            arrow.classList.remove('rotate');
        }
    }
    if (!navCircle.contains(event.target) && !hiddenNav.contains(event.target)) {
        navCircle.classList.remove("active");
        hiddenNav.classList.remove("active");
        document.body.style.overflowY = "scroll";
        overlay.classList.remove("visible");
    }
}

// event listeners
document.addEventListener('scroll', handleScroll);
navCircle.addEventListener("click", handleNavCircleClick);
dropdownBtn.addEventListener("click", handleDropdownClick);
window.addEventListener("click", handleOutsideClick);