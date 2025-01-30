// Function to display members Home Page

export const displayMembers = (members) => {
    const cards = document.querySelector("#cards-home");
    cards.innerHTML = ""; // // Clean the card container
  
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
      card.classList.add("card-ppal");
      name.textContent = member.name;
      portrait.setAttribute("src", `../chamber/images/${member.icon}`);
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