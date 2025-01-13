// JavaScript to dynamically update the year and last modified date
window.onload = function() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
};

// JavaScript to dynamically responsive website navigation menu

const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".nav-menu");
const mainContainer = document.querySelector(".main");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  mainContainer.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  mainContainer.classList.remove("active");
}))