"use strict";

const toggleMenu = document.querySelectorAll(".nav-menu a");

toggleMenu.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerHeight <= 768) {
      document.getElementById("menu-toggle").checked = false;
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.getElementById("menu-toggle").checked = false;
  }
});
