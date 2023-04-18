let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// Alternar el icono del menú y la barra de navegación al hacer clic
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Resaltar el enlace de navegación actual al desplazarse
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        // Usar comillas dobles alrededor del valor del atributo href
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  // Alternar el encabezado fijo al desplazarse
  header.classList.toggle("sticky", window.scrollY > 100);
};

navLinks.forEach((links) => {
  links.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

ScrollReveal({
  //reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Jr", "Front-end", "Back-end"],
  typeSpeed: 100,
  backSpeed: 100,
  typeDelay: 1000,
  loop: true,
});
