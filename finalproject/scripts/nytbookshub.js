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

document.addEventListener('DOMContentLoaded', function () {
    // DOM Elements
    const form = document.getElementById('contact__form');
    const countryInput = document.getElementById('countryInput');
    const suggestionsContainer = document.getElementById('suggestions');
    const countryError = document.getElementById('countryError');

    // Function to validate the country
    const validateCountry = () => {
        const inputValue = countryInput.value.trim().toLowerCase();
        const isValid = countries.some(country => 
            country.name.toLowerCase() === inputValue
        );

        // Show or hide the error message
        countryError.textContent = isValid ? '' : 'Please select a valid country from the list';
        countryError.style.display = isValid ? 'none' : 'block';
        countryInput.setCustomValidity(isValid ? '' : 'Invalid country');
        return isValid;
    };

    // Show suggestions when typing
    countryInput.addEventListener('input', () => {
        const inputValue = countryInput.value.trim().toLowerCase();
        const filteredCountries = countries.filter(country => 
            country.name.toLowerCase().includes(inputValue)
        );

        // Show suggestions
        suggestionsContainer.innerHTML = filteredCountries.map(country => `
            <div class="suggestion-item" data-value="${country.name}">${country.name}</div>
        `).join('');

        suggestionsContainer.style.display = filteredCountries.length ? 'block' : 'none';

        // Real-time validation
        validateCountry();
    });

    // Select a suggestion
    suggestionsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('suggestion-item')) {
            countryInput.value = e.target.getAttribute('data-value');
            suggestionsContainer.style.display = 'none';
            validateCountry(); // Validate after selecting a suggestion
        }
    });

   // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target !== countryInput) {
            suggestionsContainer.style.display = 'none';
        }
    });

   // Validation when submitting the form
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validateCountry()) {
            countryInput.focus();
            return;
        }

        // If valid, submit the form
        console.log('Submitting form with country:', countryInput.value);
        form.submit();
    });
});
