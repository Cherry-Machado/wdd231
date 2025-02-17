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

document.querySelector('form').addEventListener('submit', e => {
	e.preventDefault()
	const data = Object.fromEntries(
	new FormData(e.target)
  )
  alert(JSON.stringify(data))
})