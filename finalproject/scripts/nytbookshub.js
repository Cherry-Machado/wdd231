import { getNytBestSellers } from './apinytbookshub.js';
import { displayBooksCards } from './displaybookscards.js';
import { initializeBuyOptions } from './buybestbooks.js';

async function initializeApp() {
    try {
        const data = await getNytBestSellers();
        displayBooksCards(data);
        initializeBuyOptions();
    } catch (error) {
        console.error('Error:', error);
    }
}

initializeApp();