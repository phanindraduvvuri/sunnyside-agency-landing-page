const hamburgerMenu = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navItems.classList.toggle("active");
});
