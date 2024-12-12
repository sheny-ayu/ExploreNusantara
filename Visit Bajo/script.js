//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//When menu is clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
