const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

// button elements
const all = document.querySelector("#all");
const utah = document.querySelector("#utah");
const nonus = document.querySelector("#nonus");
const ten = document.querySelector("#ten");
const childs = document.querySelector("#childs");
const childl = document.querySelector("#childl");
const old = document.querySelector("#old");

/*async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();*/
const getProphetData = async (filter = "all") => {
  let prophets = await jsonFetch(url);
  switch (filter) {
    case "utah":
      prophets = prophets.filter((prophet) => prophet.birthplace === "Utah");
      break;
    case "nonus":
      prophets = prophets.filter((prophet) => prophet.birthplace === "England");
      break;
    case "ten":
      prophets = prophets.filter((prophet) => prophet.length >= 15);
      break;
    case "childs":
      prophets = prophets.filter((prophet) => prophet.numofchildren < 5);
      break;
    case "childl":
      prophets = prophets.filter((prophet) => prophet.numofchildren >= 10);
      break;
    case "old":
      prophets = prophets.filter(
        (prophet) =>
          getAgeAtDeathInYears(prophet.birthdate, prophet.death) >= 95
      );
      break;
    default:
      break;
  }
  displayProphets(prophets);
  //console.table(data.prophets); // temporary testing of data response
  //displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
};

async function jsonFetch(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.prophets;
}

const displayProphets = (prophets) => {
  const cards = document.querySelector("#cards");
  cards.innerHTML = "";
  prophets.forEach((prophet) => {
    let numero = prophets.indexOf(prophet) + 1;
    let prefixord = "";
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let stats = document.createElement("div");
    stats.classList.add("stats");
    let date = document.createElement("p");
    let death = document.createElement("p");
    let ageatdeath = document.createElement("p");
    let length = document.createElement("p");
    let place = document.createElement("p");
    let num = document.createElement("p");
    let portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    if (numero === 1) {
      prefixord = "st";
    } else if (numero === 2) {
      prefixord = "nd";
    } else if (numero === 3) {
      prefixord = "rd";
    } else {
      prefixord = "th";
    }
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname} - ${numero}${prefixord} President of the Church of Jesus Christ of Latter-day Saints`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Build the stats div content
    date.innerHTML = `<span class="label">Birth:</span> ${prophet.birthdate}`;
    place.innerHTML = `<span class="label">Place:</span> ${prophet.birthplace}`;
    num.innerHTML = `<span class="label">Children:</span> ${prophet.numofchildren}`;
    length.innerHTML = `<span class="label">Prophet Years:</span> ${prophet.length}`;
    death.innerHTML = `<span class="label">Death:</span> ${prophet.death}`;
    ageatdeath.innerHTML = `<span class="label">Age:</span> ${getAgeAtDeathInYears(
      prophet.birthdate,
      prophet.death
    )}`;

    stats.appendChild(date);
    stats.appendChild(place);
    stats.appendChild(num);
    stats.appendChild(length);
    stats.appendChild(death);
    stats.appendChild(ageatdeath);

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(stats);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData();

// buttons
all.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("all");
  all.classList.add("active");
});

utah.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("utah");
  utah.classList.add("active");
});

//document.querySelector("#nonus")
nonus.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("nonus");
  nonus.classList.add("active");
});

ten.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("ten");
  ten.classList.add("active");
});

childs.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("childs");
  childs.classList.add("active");
});

childl.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("childl");
  childl.classList.add("active");
});

old.addEventListener("click", () => {
  clearButtonClasses();
  getProphetData("old");
  old.classList.add("active");
});

function getAgeAtDeathInYears(birthdate, deathdate) {
  let birth = new Date(birthdate);
  let death = new Date(deathdate);
  if (deathdate === null) {
    death = new Date();
  }
  return Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
}

function clearButtonClasses() {
  filterbuttons = document.querySelectorAll("button");
  filterbuttons.forEach((button) => (button.className = ""));
}
