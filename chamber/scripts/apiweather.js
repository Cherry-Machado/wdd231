const API_KEY = "e56d78216620e50a4d889539eff1b6a7";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const myLat = "-23.55";
const myLong = "-46.64";

// CONSTRUCT A FULL PATH USING TEMPLATE LIETERALS

export async function getCurrentWeatherData() {
  try {
    const response = await fetch(
      `${BASE_URL}?lat=${myLat}&lon=${myLong}&units=metric&appid=${API_KEY}&lang=pt_br;`
    );

    if (!response.ok) throw new Error("Error al obtener datos");

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
