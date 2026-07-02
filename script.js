const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const currentPage = document.body.dataset.page;

if (currentPage && navLinks) {
  const links = navLinks.querySelectorAll("a");
  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.includes(`${currentPage}.html`)) {
      link.classList.add("is-active");
    }
  });
}

console.log("AfriLang platform loaded");
