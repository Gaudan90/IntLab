document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const body = document.body;

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const preview = document.createElement('div');
            preview.classList.add('image-preview');
            
            const previewImg = document.createElement('img');
            previewImg.src = img.src;
            previewImg.alt = img.alt;

            const closeButton = document.createElement('button');
            closeButton.innerHTML = '&times;';
            closeButton.classList.add('close-preview');

            preview.appendChild(closeButton);
            preview.appendChild(previewImg);
            body.appendChild(preview);

            closeButton.addEventListener('click', () => {
                body.removeChild(preview);
            });
        });
    });

    const form = document.getElementById('cosplay-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Registrazione Cosplay inviata con successo!');
    });

    const acquistaBiglietto = document.querySelector('.acquista-btn');
    acquistaBiglietto.addEventListener('click', () => {
        alert('Biglietto Cosplay prenotato. Verrai reindirizzato al pagamento.');
    });
});