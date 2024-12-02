document.addEventListener('DOMContentLoaded', () => {
    // Immagini per il carousel
    const immagini = [
        'assets/image-one.jpg',
        'assets/image-two.jpg',
        'assets/image-three.png',
        'assets/image-four.jpg',
        'assets/image-five.jpg'
    ];

    const carouselImages = document.querySelector('.carousel-images');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;
    let carouselInterval;

    // Carica le immagini nel carousel
    function caricaImmagini() {
        // Rimuovi eventuali immagini esistenti
        while (carouselImages.firstChild) {
            carouselImages.removeChild(carouselImages.firstChild);
        }

        // Crea e aggiungi nuove immagini in modo sicuro
        immagini.forEach(imgSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = 'Immagine evento';
            imgElement.style.display = 'none';
            carouselImages.appendChild(imgElement);
        });
    }

    // Mostra immagine corrente
    function mostraImmagine(index) {
        const images = carouselImages.querySelectorAll('img');
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    // Navigazione carousel
    function navigaCarousel(direzione) {
        if (direzione === 'next') {
            currentIndex = (currentIndex + 1) % immagini.length;
        } else {
            currentIndex = (currentIndex - 1 + immagini.length) % immagini.length;
        }
        mostraImmagine(currentIndex);
    }

    // Avvia rotazione automatica
    function avviaRotazioneAutomatica() {
        carouselInterval = setInterval(() => {
            navigaCarousel('next');
        }, 10000); // 10 secondi
    }

    // Ferma rotazione automatica
    function fermaRotazioneAutomatica() {
        clearInterval(carouselInterval);
    }

    // Gestore form
    function inviaRichiesta(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const dati = Object.fromEntries(formData.entries());
        
        // In una vera applicazione, si invierebbe al server
        console.log('Dati inviati:', dati);
        alert('Richiesta inviata con successo!');
    }

    // Inizializzazione
    caricaImmagini();
    mostraImmagine(currentIndex);
    avviaRotazioneAutomatica();

    // Event listener
    nextBtn.addEventListener('click', () => {
        fermaRotazioneAutomatica();
        navigaCarousel('next');
        avviaRotazioneAutomatica();
    });
    
    prevBtn.addEventListener('click', () => {
        fermaRotazioneAutomatica();
        navigaCarousel('prev');
        avviaRotazioneAutomatica();
    });
    
    const form = document.querySelector('form');
    form.addEventListener('submit', inviaRichiesta);
});
