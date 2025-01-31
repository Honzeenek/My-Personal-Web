document.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50 ) { // Adjust the scroll value as needed
      nav.classList.add('nav-hidden');
      dropdownContent.classList.remove("show");
    } else {
      nav.classList.remove('nav-hidden');
    }
  });

document.addEventListener("scroll", function() {
    const navCircle = document.getElementById("nav-circle");
    if (window.scrollY > 80 ) {
        navCircle.classList.remove("nav-circle-hidden");
    } else {
        navCircle.classList.add("nav-circle-hidden");
    }
})

const navCircle = document.getElementById("nav-circle");
const hiddenNav = document.querySelector(".off-screen-menu");

navCircle.addEventListener("click", function() {
    navCircle.classList.toggle("active")
    hiddenNav.classList.toggle("active");

    if (navCircle.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

})

const dropdownBtn = document.querySelector(".btn");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownBtn.addEventListener("click", () => {
    dropdownContent.classList.toggle("show");
    arrow.classList.toggle('rotate');
});

window.addEventListener("click", (event) => {
    if (!event.target.matches(".btn")) {
        if (dropdownContent.classList.contains("show")) {
            dropdownContent.classList.remove("show");
            arrow.classList.remove('rotate');
        }
    }
})

const arrow = document.querySelector(".arrow");

