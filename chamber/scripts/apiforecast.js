const API_KEY = "e56d78216620e50a4d889539eff1b6a7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";

export async function getWeatherData() {
  try {
    const response = await fetch(
      `${BASE_URL}?q=São Paulo,BR&units=metric&lang=pt_br&appid=${API_KEY}`
    );

    if (!response.ok) throw new Error("Error al obtener datos");

    const data = await response.json();
    console.log(data);
    return processForecastData(data);
  } catch (error) {
    throw error;
  }
}

function processForecastData(data) {
  // Filter data by 12:00PM everyday.
  return data.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 3)
    .map((item) => ({
      temp: item.main.temp,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
      date: item.dt_txt,
    }));
}
