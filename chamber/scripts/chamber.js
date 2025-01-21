// Dynamically update the year and date of last modification
window.onload = () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modification: ${document.lastModified}`;
};

// Directory Website

const url = "/chamber/data/members.json";

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
    const name = document.createElement("h4");
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
    /*portrait.setAttribute("width", "200");
    portrait.setAttribute("height", "200");
    portrait.setAttribute("width", "100%");
    portrait.setAttribute("height", "100%");*/

    adress.textContent = member.adress;
    phone.textContent = member.phone;
    memWebsite.textContent = member.website;
    description.textContent = member.description;

    let membershipLevel = "";
    switch (member.membership_level) {
      case 1:
        membershipLevel = "Member";
        break;
      case 2:
        membershiplevel = "Silver";
        break;
      case 3:
        membershipLevel = "Gold";
        break;
    }

    membership.textContent = `Membership level: ${member.membership}`;

    // Append the section(card) with the created elements

    cardDiv.appendChild(name);
    cardDiv.appendChild(adress);
    cardDiv.appendChild(phone);
    cardDiv.appendChild(memWebsite);
    cardDiv.appendChild(membership);
    cardDiv.appendChild(description);

    card.appendChild(portrait);
    card.appendChild(cardDiv);

    cards.appendChild(card);
  });
};

getMembers();
