import { getMembers } from "./getMembers.js";
import { displayMembers } from "./displayMembers.js";
import { displayMembersHome } from "./displayMembersHome.js";
import { initializeForecastApp } from "./weather-forecast-app.js";
import { initializeCurrentWeatherApp } from "./current-weather-app.js";

// Dynamically update the year and date of last modification
window.onload = () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modification: ${document.lastModified}`;

  const directoryMenuOption = document.querySelector(".directory");
  const discoverMenuOption = document.querySelector(".discover");
  const joinMenuOption = document.querySelector(".join");
  directoryMenuOption.classList.remove("current-menu-item");
  discoverMenuOption.classList.remove("current-menu-item");
  joinMenuOption.classList.remove("current-menu-item");

};

// hamburguerElement.addEventListener("click") callback

const hamburguerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburguerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburguerElement.classList.toggle("open");
});

 // Actions when Home is selected in the Menu Options.
// Call current-weather
initializeCurrentWeatherApp();

// Call weather-forecast
initializeForecastApp();

/* Home page Website
 Call getMembers and pass displayMembers as <callback></callback> */

getMembers(displayMembersHome);


  /******************Activar Botón de Grid *******************/

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
};

getMembers(displayMembers);








