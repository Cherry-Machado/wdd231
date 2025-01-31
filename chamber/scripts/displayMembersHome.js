// Function to display members Home Page
export const displayMembersHome = (members) => {
    const cards = document.querySelector("#cards-home");
    cards.innerHTML = ""; // Limpiar el contenedor de tarjetas

    //Filter members with membership_level different than 1(Member Level).
    const filteredMembers = members.filter(member => member.membership_level !== 1);

    // Select 3 random members
    const randomMembers = getRandomMembers(filteredMembers, 3);

    // Show the selected members
    randomMembers.forEach((member) => {
        /*const containercard = document.createElement("main");*/
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

        //Add classes
        /*containercard.classList.add("container-card");*/
        businesscard.classList.add("box", "business-card");
        businesscontent.classList.add("business-content");
        businessheading.classList.add("business-heading");
        tagline.classList.add("tagline");
        memberinfo.classList.add("member-info");
        memberimage.classList.add("member-image");
        details.classList.add("details");

        // Configuring image attributes
        businessicon.setAttribute("src", `../chamber/images/${member.icon}`);
        businessicon.setAttribute("alt", `Logo of ${member.name}`);
        businessicon.setAttribute("loading", "lazy");

        businessicon.setAttribute("aria-labelledby","business-heading");


        //Configuring content
        businessheading.textContent = member.name;
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

         // Append elements to the DOM
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
        /*containercard.appendChild(businesscard);
        cards.appendChild(containercard);*/
        cards.appendChild(businesscard);
    });
};

//Function to select random members
function getRandomMembers(members, count) {
     // Mix the array
    const shuffled = members.sort(() => 0.5 - Math.random()); 
    // select the first "count" members.
    return shuffled.slice(0, count);
}