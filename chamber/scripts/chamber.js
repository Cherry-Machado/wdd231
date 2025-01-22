// Dynamically update the year and date of last modification
window.onload = () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modification: ${document.lastModified}`;
};

// hamburguerElement.addEventListener("click") callback

const hamburguerElement = document.querySelector("#myButton");
const navElement = document.querySelector(".menuLinks");

hamburguerElement.addEventListener("click", () => {
  navElement.classList.toggle("open");
  hamburguerElement.classList.toggle("open");
});

// Directory Website

const url = "../data/members.json";

async function getMembers() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `HTTP error! Failed to fetch members.json. status: ${response.status}`
      );
    }
    const data = await response.json();
    console.table(data.companies);
    displayMembers(data.companies);
  } catch (error) {
    console.error("Error fetching members.json: ", error);
  }
}
const displayMembers = (members) => {
  const cards = document.querySelector("#cards");
  cards.innerHTML = "";
  members.forEach((member) => {
    const card = document.createElement("section");
    const cardDiv = document.createElement("div");
    const name = document.createElement("h3");
    const portrait = document.createElement("img");
    const adress = document.createElement("p");
    const phone = document.createElement("p");
    const memWebsite = document.createElement("p");
    const membership = document.createElement("p");
    const description = document.createElement("p");

    cardDiv.classList.add("cardData");
    name.textContent = member.name;
    portrait.setAttribute("src", `/chamber/images/${member.icon}`);
    portrait.setAttribute("alt", `Logo of ${member.name}`);
    portrait.setAttribute("loading", "lazy");
    adress.textContent = member.address;
    phone.textContent = member.phone;
    memWebsite.textContent = member.website;
    description.textContent = member.description;

    let membershipLevel = "";
    switch (member.membership_level) {
      case 1:
        membershipLevel = "Member";
        break;
      case 2:
        membershipLevel = "Silver";
        break;
      case 3:
        membershipLevel = "Gold";
        break;
    }

    membership.textContent = `Membership level: ${membershipLevel}`;

    // Append the section(card) with the created elements

    cardDiv.appendChild(name);
    cardDiv.appendChild(description);
    cardDiv.appendChild(adress);
    cardDiv.appendChild(phone);
    cardDiv.appendChild(memWebsite);
    cardDiv.appendChild(membership);

    card.appendChild(portrait);
    card.appendChild(cardDiv);

    cards.appendChild(card);
  });
};

getMembers();

/******************Activar Botón de Grid *********************/

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
}
