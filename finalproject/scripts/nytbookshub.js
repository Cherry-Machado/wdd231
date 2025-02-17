import { getNytBestSellers } from './apinytbookshub.js';
import { displayBooksCards } from './displaybestbookscards.js';
import { initializeBuyOptions } from './buybestbooks.js';

// hamburguerElement.addEventListener("click") callback
const hamburguerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburguerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburguerElement.classList.toggle("open");
});

const currentOptionHome = document.querySelector(".home-menu");
const currentOptionAbout = document.querySelector(".about-menu");

currentOptionHome.addEventListener("click", () => {
    currentOptionAbout.classList.remove("current-menu-item");
    currentOptionHome.classList.add("current-menu-item");
});

currentOptionAbout.addEventListener("click", () => {
    currentOptionAbout.classList.add("current-menu-item");
    currentOptionHome.classList.remove("current-menu-item");
});

async function initializeApp() {
    try {
        const data = await getNytBestSellers();
        console.log("Datos recibidos:", data); // Verifica los datos en la consola
        displayBooksCards(data);
        initializeBuyOptions();
    } catch (error) {
        console.error('Error en initializeApp:', error);
    }
}

initializeApp();