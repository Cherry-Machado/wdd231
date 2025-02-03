export function createElement(tag, classes = [], attributes = {}) {
    const element = document.createElement(tag);
    classes.forEach(className => element.classList.add(className));
    Object.entries(attributes).forEach(([key, value]) => 
        element.setAttribute(key, value)
    );
    return element;
}

export function createForecastCard(days) {

    const card = createElement('div', ['forecast-card']);
    
    card.innerHTML = `
      
       
        
        <div class="three-day-grid">
            ${days.map(day => `
                <div class="day-card">
                    <div class="day-header">
                        ${new Date(day.date).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric'})}
                    </div>
                    <img class="weather-icon" src="https://openweathermap.org/img/wn/${day.icon}@2x.png" 
                         alt="${day.description}" loading="lazy">
                    <p>${day.description}</p>
                    <div class="temp-container">
                        <div class="main-temp">${Math.round(day.temp)}°C</div>
                    </div>
                    
                </div>
            `).join('')}
        </div>
    `;
    
    return card;
}

export function createCurrentWeatherCard(days) {
    
    const card = createElement('div', ['forecast-card']);
    
    card.innerHTML = `
        <div class="three-day-grid">
            ${days.map(day => `
                <div class="day-card">
                    <div class="day-header">
                        ${new Date(day.date).toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric'})}
                    </div>
                    <img class="weather-icon" src="https://openweathermap.org/img/wn/${day.icon}@2x.png" 
                         alt="${day.description}">
                    <p>${day.description}</p>
                    <div class="temp-container">
                        <div class="main-temp">${Math.round(day.temp)}°C</div>
                    </div>
                    
                </div>
            `).join('')}
        </div>
    `;
    
    return card;
}

export function showError(message) {
    const errorElement = createElement('div', ['error-message']);
    errorElement.textContent = message;
    document.querySelector('.weather-forecast').appendChild(errorElement);
}