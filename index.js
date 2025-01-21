document.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 170) { // Adjust the scroll value as needed
      nav.classList.add('nav-hidden');
      dropdownContent.classList.remove("show");
    } else {
      nav.classList.remove('nav-hidden');
    }
  });

document.getElementById('scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

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

