document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', () => {
            const preview = document.createElement('div');
            preview.style.position = 'fixed';
            preview.style.top = '0';
            preview.style.left = '0';
            preview.style.width = '100%';
            preview.style.height = '100%';
            preview.style.backgroundColor = 'rgba(0,0,0,0.9)';
            preview.style.display = 'flex';
            preview.style.justifyContent = 'center';
            preview.style.alignItems = 'center';
            preview.style.zIndex = '1000';

            const fullImg = document.createElement('img');
            fullImg.src = img.src;
            fullImg.style.maxWidth = '90%';
            fullImg.style.maxHeight = '90%';

            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '20px';
            closeBtn.style.right = '20px';
            closeBtn.style.fontSize = '40px';
            closeBtn.style.background = 'none';
            closeBtn.style.border = 'none';
            closeBtn.style.color = 'white';
            closeBtn.style.cursor = 'pointer';

            preview.appendChild(fullImg);
            preview.appendChild(closeBtn);
            document.body.appendChild(preview);

            closeBtn.addEventListener('click', () => {
                document.body.removeChild(preview);
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

/*To avoid a continuous creation of image-preview at the bottom of the website, I added this clean-up code.
* It is still unclear why it creates a div out of the blue like that, but for now this'll work.
*/
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.classList && node.classList.contains('image-preview')) {
                if (node.style.display !== 'flex') {
                    node.remove();
                }
            }
        });
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});