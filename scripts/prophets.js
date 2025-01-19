const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets); // temporary testing of data response
  displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
}

const displayProphets = (prophets) => {
  // card build code goes here
  prophets.forEach((prophet) => {
    let num = prophets.indexOf(prophet) + 1;
    let prefixord = "";
    let card = document.createElement("section");
    let fullName = document.createElement("h2"); 
    let portrait = document.createElement("img");

    // Build the h2 content out to show the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
    // Build the image portrait by setting all the relevant attributes
    portrait.setAttribute("src", prophet.imageurl);
    if (num === 1) {
        prefixord = "st";
    }
    else if (num === 2) {
        prefixord = "nd";
    }
    else if (num === 3) {
        prefixord = "rd";
    }
    else {
        prefixord = "th";
    }
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${num}${prefixord} President of the Church of Jesus Christ of Latter-day Saints`); 
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(fullName);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
};

getProphetData();
