import { places } from '../data/places.mjs'
console.log(places);

function displayItems(places)
{
    const cards = document.querySelector(".discover-container");
    cards.innerHTML = ""; // // Clean the card container
    places.forEach( x => {
        //Build the card element
        const thecard = document.createElement('div')
        //Buid the photo element
        const thephoto = document.createElement('img')
        thephoto.src = `./images/${x.photo_link}`
        thephoto.alt = x.name
        thecard.appendChild(thephoto)
        //Build the title element
        const thetitle = document.createElement('h2')
        thetitle.innerText = x.name
        thecard.appendChild(thetitle)
        //Build the address element
        const theaddress = document.createElement('address')
        theaddress.innerText = x.address
        thecard.appendChild(theaddress)
        //Build the description element
        const thedesc = document.createElement('p')
        thedesc.innerText = x.description
        thecard.appendChild(thedesc)

        cards.appendChild(thecard);
    });
}

displayItems(places);
