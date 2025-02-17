import { getNytBestSellers } from './apinytbookshub.js';
import { displayBooksCards } from './displaybestbookscards.js';
import { initializeBuyOptions } from './buybestbooks.js';
import countries from './countries.js';

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

document.addEventListener('DOMContentLoaded', function() {
    const countryInput = document.getElementById('countryInput');
    const countryList = document.getElementById('countryList');
    const countryCodeInput = document.getElementById('countryCode');

    // Inject countries into the datalist
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name; 
        option.dataset.code = country.code;
        //option.setAttribute('data-code', country.code); // Country coode hide
        countryList.appendChild(option);
    });

    // Handle user selection
    countryInput.addEventListener('input', () => {
        const inputValue = countryInput.value.toLowerCase();
        const found = countries.find(c => c.name.toLowerCase() === inputValue);
        countryCodeInput.value = found ? found.code : '';
    });
    
    /*countryInput.addEventListener('input', function() {
        const inputValue = this.value.toLowerCase();
        const matchedCountry = countries.find(country => 
            country.name.toLowerCase() === inputValue
        );

        // Update the hidden field with the country code
        if (matchedCountry) {
            countryCodeInput.value = matchedCountry.code;
        } else {
            countryCodeInput.value = '';
        }*/
});
