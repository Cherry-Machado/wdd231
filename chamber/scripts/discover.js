import { places } from '../data/places.mjs';

// Function to display cards
function displayItems(places) {
    const cards = document.querySelector(".discover-container");
    cards.innerHTML = ""; // Clear the card container
    places.forEach(x => {
        // Build the card element
        const thecard = document.createElement('div');
        thecard.classList.add('card'); // Add a class for styling

        // Build the photo element
        const thephoto = document.createElement('img');
        thephoto.src = `./images/${x.photo_link}`;
        thephoto.alt = x.name;
        thecard.appendChild(thephoto);

        // Build the title element
        const thetitle = document.createElement('h2');
        thetitle.innerText = x.name;
        thecard.appendChild(thetitle);

        // Build the address element
        const theaddress = document.createElement('address');
        theaddress.innerText = x.address;
        thecard.appendChild(theaddress);

        // Build the description element
        const thedesc = document.createElement('p');
        thedesc.innerText = x.description;
        thecard.appendChild(thedesc);

        // Build the "Learn More" button
        const learnMoreButton = document.createElement('button');
        learnMoreButton.innerText = 'Learn More';
        learnMoreButton.addEventListener('click', () => {
            // Redirect to a website related to the card's name
            window.open(`https://www.google.com/search?q=${encodeURIComponent(x.name)}`, '_blank');
        });
        thecard.appendChild(learnMoreButton);

        cards.appendChild(thecard);
    });
}

// Function to calculate the difference in days between two dates
function getDaysBetweenDates(date1, date2) {
    const msPerDay = 86400000; // Milliseconds in a day
    return Math.floor((date2 - date1) / msPerDay);
}

// Function to display the last visit message
function displayLastVisitMessage() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();
    const messageContainer = document.querySelector('.last-visit-message');

    if (!lastVisit) {
        // First visit
        messageContainer.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = getDaysBetweenDates(Number(lastVisit), currentDate);
        if (daysSinceLastVisit < 1) {
            messageContainer.textContent = "Back so soon! Awesome!";
        } else {
            messageContainer.textContent = `You last visited ${daysSinceLastVisit} ${daysSinceLastVisit === 1 ? 'day' : 'days'} ago.`;
        }
    }

    // Insert the message next to the <h1 class="discover-page">Discover Page</h1>
    const discoverPageTitle = document.querySelector('.discover-page');
    discoverPageTitle.insertAdjacentElement('afterend', messageContainer);

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', currentDate.toString());
}

// Call the functions
displayItems(places);
displayLastVisitMessage();