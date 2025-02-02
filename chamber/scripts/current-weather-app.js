import { getCurrentWeatherData } from "./apiweather.js";
import { createWeatherCard } from "./uiweather.js";

export function initializeCurrentWeatherApp() {
    const currentWeatherContainer = document.querySelector('.current-weather');
    
    const loadCurrentWeatherData = async () => {
        try {
            const data = await getCurrentWeatherData();
            const card = createWeatherCard(data);
            currentWeatherContainer.appendChild(card);
        } catch (error) {
            currentWeatherContainer.innerHTML = `<p class="error-message">Error al cargar el clima: ${error.message}</p>`;
        }
    };
    
    loadCurrentWeatherData();
}