// Function to display members Home Page

export const displayMembersHome = (members) => 
{
    const cards = document.querySelector("#cards-home");
    cards.innerHTML = ""; // // Clean the card container
  
    members.forEach((member) => 
    {
      if (member.membership_level != 1)
        {
      
            const containercard = document.createElement("main");
            const businesscard = document.createElement("article");
            const businesscontent = document.createElement("div");
            const businessheading = document.createElement("h3");
            const tagline = document.createElement("p");
            const memberinfo = document.createElement("div");
            const memberimage = document.createElement("figure");
            const businessicon = document.createElement("img");
            const details = document.createElement("address");
            const adress = document.createElement("p");
            const phone = document.createElement("p");
            const memWebsite = document.createElement("p");


            const description = document.createElement("p");
        
            containercard.classList.add("container-card");
            businesscard.classList.add("box");
            businesscard.classList.add("business-card");
            businesscontent.classList.add("business-content");
            businessheading.classList.add("business-heading");
            tagline.classList.add("tagline");
            memberinfo.classList.add("member-info");
            memberimage.classList.add("member-image");
            details.classList.add("details");


            businessicon.setAttribute("aria-labelledby","business1-heading");
            businessicon.setAttribute("src", `../chamber/images/${member.icon}`);
            businessicon.setAttribute("alt", `Logo of ${member.name}`);
            businessicon.setAttribute("loading", "lazy");
            
            businessheading.textContent = member.name;
            description.textContent = member.description;
            adress.innerHTML = `<span>ADRESS: </span> ${member.address}`;
            phone.innerHTML = `<span>PHONE: </span><a href="tel:${member.phone}">${member.phone}</a>`;
            memWebsite.innerHTML = `URL: <a href="${member.website}">${member.website}</a>`;

            let membershipLevel = "";
            switch (member.membership_level) {
                case 2:
                membershipLevel = "Silver";
                break;
                case 3:
                membershipLevel = "Gold";
                break;
            }
        
            tagline.textContent = `Membership level: ${membershipLevel}`;
            
            // Append the section(card) with the created elements

            memberimage.appendChild(businessicon);
            details.appendChild(adress);
            details.appendChild(phone);
            details.appendChild(memWebsite);
            memberinfo.appendChild(memberimage);
            memberinfo.appendChild(details);
            businesscontent.appendChild(businessheading);
            businesscontent.appendChild(tagline);
            businesscontent.appendChild(memberinfo);
            businesscard.appendChild(businesscontent);
            containercard.appendChild(businesscard);
            cards.appendChild(containercard);
        }
        
    });
};