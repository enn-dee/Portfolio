const toggleMenu = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggleMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});
