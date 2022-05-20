const body = document.body;
const navToggler = document.querySelector("#nav-toggler");

const toggleNav = () => body.classList.toggle("nav-is-open");

navToggler.addEventListener("click", toggleNav);
