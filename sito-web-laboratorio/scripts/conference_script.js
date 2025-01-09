document.addEventListener('DOMContentLoaded', () => {
    const conferenceForm = document.getElementById('conference-form');

    // Gestione prenotazione conferenze
    conferenceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(conferenceForm);
        // In un'applicazione reale, qui si invierebbe al server
        
        // Animazione di conferma
        const submitBtn = conferenceForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'PRENOTATO!';
        submitBtn.style.backgroundColor = '#4CAF50';
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '#8b0000';
            conferenceForm.reset();
        }, 2000);
    });

    // Effetto hover sulle card
    const conferenceCards = document.querySelectorAll('.conference-card');
    conferenceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 5px 15px rgba(139, 0, 0, 0.4)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
});