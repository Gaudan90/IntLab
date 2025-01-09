document.addEventListener('DOMContentLoaded', () => {
    const gameSessionForm = document.getElementById('game-session-form');

    // Gestione prenotazione sessioni di gioco
    gameSessionForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(gameSessionForm);
        // In un'applicazione reale, qui si invierebbe al server
        
        // Animazione di conferma
        const submitBtn = gameSessionForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'SESSIONE PRENOTATA!';
        submitBtn.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '#8b0000';
            gameSessionForm.reset();
        }, 2000);
    });

    // Animazione hover per le developer cards
    const developerCards = document.querySelectorAll('.developer-card');
    developerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 5px 15px rgba(139, 0, 0, 0.4)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Animazione per il featured game
    const gameSpotlight = document.querySelector('.game-spotlight');
    gameSpotlight.addEventListener('mouseenter', () => {
        gameSpotlight.style.transform = 'scale(1.02)';
        gameSpotlight.style.transition = 'transform 0.3s ease';
    });

    gameSpotlight.addEventListener('mouseleave', () => {
        gameSpotlight.style.transform = 'scale(1)';
    });
});