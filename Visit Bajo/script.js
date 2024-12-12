//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//When menu is clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Out sidebar
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
