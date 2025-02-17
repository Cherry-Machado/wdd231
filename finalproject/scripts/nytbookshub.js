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
    // DOM Elements
    const form = document.getElementById('contact__form');
    const countryInput = document.getElementById('countryInput');
    const countryList = document.getElementById('countryList');
    const countryError = document.getElementById('countryError');

    // Fill datalist with countries
    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.name;
        option.dataset.code = country.code;
        countryList.appendChild(option);
    });


    // Real time validation
    countryInput.addEventListener('input', () => {
        const inputValue = countryInput.value.trim();
        const isValid = countries.some(country => 
            country.name.toLowerCase() === inputValue.toLowerCase()
        );
        
        countryError.textContent = isValid ? '' : 'Please select a valid country from the list';
        countryError.style.display = isValid ? 'none' : 'block';
        countryInput.setCustomValidity(isValid ? '' : 'Invalid country');
    });

    // Validation when sending
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = countryInput.value.trim();
        const isValid = countries.some(country => 
            country.name.toLowerCase() === inputValue.toLowerCase()
        );

        if (!isValid) {
            countryError.style.display = 'block';
            countryInput.focus();
            return;
        }
        
        form.submit();
    });
});

