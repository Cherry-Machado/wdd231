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
    const form = document.getElementById('contact__form');
    const countryInput = document.getElementById('countryInput');
    const countryList = document.getElementById('countryList');
    const countryCodeInput = document.getElementById('countryCode');
    const countryError = document.getElementById('countryError');

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
        const inputValue = countryInput.value.trim();
        const isValid = countries.some(country => 
            country.name.toLowerCase() === inputValue.toLowerCase()
        );
        
        countryError.style.display = isValid ? 'none' : 'block';
        countryInput.setCustomValidity(isValid ? '' : 'Invalid country');
    });

    

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputValue = countryInput.value.trim();
            const selectedCountry = countries.find(country => 
                country.name.toLowerCase() === inputValue.toLowerCase()
            );
    
            if (!selectedCountry) {
                countryError.textContent = 'Please select a valid country from the list';
                countryError.style.display = 'block';
                countryInput.focus();
                return;
            }
    
            // If it's ok, send the form
            countryError.style.display = 'none';
            console.log('Submitting form with country:', selectedCountry);
            form.submit();
        });
        
});
