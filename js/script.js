const menu = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

menu.onclick = function () {
  nav.classList.toggle("active");
};

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.onclick = function () {
    nav.classList.remove("active");
  };
});
