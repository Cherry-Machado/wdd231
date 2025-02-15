export const displayBooksCards = (data) => {
    const books = data.results.lists[0].books;

    books.forEach((book, index) => {
        const position = index + 1;
        let cardClass;

        // Determinar la clase del card según la posición
        if (position <= 3) {
            cardClass = `bestbook__card${position}`;
        } else {
            cardClass = `bestbook2__card${position}`;
        }

        // Seleccionar el elemento del DOM
        const card = document.querySelector(`.${cardClass}`);
        if (!card) {
            console.error(`Card ${cardClass} no encontrado`);
            return;
        }

        // Inyectar datos en los elementos del card
        const injectData = (selector, content) => {
            const element = card.querySelector(selector);
            if (element) element.textContent = content;
        };

        // Posición (sobre la imagen)
        const positionElement = card.querySelector('.bestbook__position');
        if (positionElement) positionElement.textContent = `#${position}`;

        // Imagen
        const img = card.querySelector('.bestbook__picture');
        if (img) {
            img.src = book.book_image;
            img.alt = book.title;
        }

        // Semanas en la lista
        injectData('.bestbook__weeks', `${book.weeks_on_list} weeks on list`);

        // Título, autor y descripción
        injectData('.bestbook__title', book.title);
        injectData('.bestbook__author', `by ${book.author}`);
        injectData('.bestbook__description', book.description);

        // Selector de compra
        const select = card.querySelector('select');
        if (select) {
            // Limpiar opciones existentes
            select.innerHTML = '<option value="" disabled selected>BUY ▼</option>';
            
            // Añadir opciones de compra
            book.buy_links.forEach(link => {
                const option = document.createElement('option');
                option.value = link.url;
                option.textContent = link.name;
                select.appendChild(option);
            });

            // Redirigir al seleccionar
            select.addEventListener('change', () => {
                if (select.value) window.open(select.value, '_blank');
            });
        }
    });
};
