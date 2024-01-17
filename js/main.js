const btnMenu = document.querySelector(".btn-menu");
const headerMenu = document.querySelector(".header__menu");
const openBtn = document.querySelector(".open");
const menuShadow = document.querySelector(".menu--close");
btnMenu.addEventListener("click", () => {
  headerMenu.classList.toggle("menu-open");
  btnMenu.classList.toggle("open");
  menuShadow.classList.toggle("menu--open");
});
openBtn.addEventListener("click", () => {
  btnMenu.classList.remove("open");
  headerMenu.classList.remove("menu-open");
  menuShadow.classList.remove("menu--open");
});


