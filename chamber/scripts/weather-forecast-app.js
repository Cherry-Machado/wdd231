import { getWeatherData } from './apiforecast.js';
import { createForecastCard, showError } from './uiforecast.js';

export function initializeForecastApp() {
    const forecastContainer = document.querySelector('.weather-forecast');
    
    const loadWeatherData = async () => {
        try {
            const data = await getWeatherData();
            forecastContainer.appendChild(createForecastCard(data));
        } catch (error) {
            showError(error.message);
        }
    };
    
    loadWeatherData();
}