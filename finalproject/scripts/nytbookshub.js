import { getNytBestSellers } from './apinytbookshub.js';
import { displayBooksCards } from './displaybookscards.js';


data = getNytBestSellers();
displayBooksCards(data);