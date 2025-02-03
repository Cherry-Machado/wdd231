export function createWeatherCard(data) {
    // Data basic validation
    if (!data || !data.sys || !data.weather || !data.main) {
        throw new Error("Datos del clima no válidos");
    }

    // Create card element
    const card = document.createElement('div');
    card.classList.add('current-weather-card'); 


    // Format sunrise y sunset
    const sunriseUnix = data.sys.sunrise;
    const sunriseDate = new Date(sunriseUnix * 1000);
    const sunsetUnix = data.sys.sunset;
    const sunsetDate = new Date(sunsetUnix * 1000);

    // Format the houra with specific options
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedSunrise = sunriseDate.toLocaleTimeString('en-US', timeOptions);
    const formattedSunset = sunsetDate.toLocaleTimeString('en-US', timeOptions);

    // Asig content to the HTML
    card.innerHTML = `
        <div class="content">
            <figure class="image">
                <img src="https://openweathermap.org/img/wn/${
                    data.weather[0].icon
                }@2x.png" alt="${data.weather[0].description}" loading="lazy">
            </figure>
            <div class="details">
                <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C</p>
                <p><strong>Condition:</strong> ${data.weather[0].description}</p>
                <p><strong>High:</strong> ${Math.round(data.main.temp_max)}°C</p>
                <p><strong>Low:</strong> ${Math.round(data.main.temp_min)}°C</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Sunrise:</strong> ${formattedSunrise}</p>
                <p><strong>Sunset:</strong> ${formattedSunset}</p>
            </div>
        </div>
    `;

    return card;
}