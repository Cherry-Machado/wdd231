// SELECT HTML ELEMENTS IN THE DOCUMENT
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");

// CREATE REQUIRED VARIABLES FOR THE URL

const myKey = "e56d78216620e50a4d889539eff1b6a7";
const myLat = "49.75";
const myLong = "6.64";
const myUnits = "imperial";

// CONSTRUCT A FULL PATH USING TEMPLATE LIETERALS

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=${myUnits}`;

// TRY TO GRAB THE CURRENT WEATHER DATA

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

// DISPLAY THE JSON DATA ONTO MY WEB PAGE

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  //const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; //  (This version allows sizing using @.)
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", data.weather[0].description);
  captionDesc.textContent = `${desc}`;
}
