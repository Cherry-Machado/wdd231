// Dynamically update the year and date of last modification
window.onload = () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modification: ${document.lastModified}`;
};

// Directory Website

const url = "../data/members.json";

async function getMembers() {
  try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Failed to fetch members.json. status: ${response.status}`);
        }
        const data = await response.json();
        console.table(data.companies);
        displayMembers(data.companies);
    } catch(error){
        console.error("Error fetching members.json: ", error);
    }
}
const displayMembers = (members) => {
  const cards = document.querySelector("#cards");
  cards.innerHTML = "";
  let membershipLevel = "";
  members.forEach((member) => {
    let card = document.createElement("section");
    let name = document.createElement("h4");
    let portrait = document.createElement("img");
    let adress = document.createElement("p");
    let phone = document.createElement("p");
    let email = document.createElement("p");
    let membership = document.createElement("p");
    let description = document.createElement("p");

    name.textContent = `${member.name}`;
    portrait.setAttribute("src", member.icon);
    portrait.setAttribute("alt", `Logo of ${member.name}`);
    portrait.setAttribute("loading", "lazy");
    /*portrait.setAttribute("width", "200");
            portrait.setAttribute("height", "200");*/
    portrait.setAttribute("width", "100%");
    portrait.setAttribute("height", "100%");

    adress.innerHTML = `<span class="label">${member.adress}</span> `;
    phone.innerHTML = `<span class="label">${member.phone}</span> `;
    email.innerHTML = `<span class="label email">${member.email}</span> `;
    if (member.membership_level === 1) {
      membershipLevel = "Member";
    } else if (member.membership_level === 2) {
      membershipLevel = "Silver";
    } else {
      membershipLevel = "Gold";
    }
    membership.innerHTML = `<span class="label">${member.membership}</span> `;

    // Append the section(card) with the created elements

    card.appendChild(portrait);
    card.appendChild(name);
    card.appendChild(adress);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(membership);
  });
};

getMembers();
