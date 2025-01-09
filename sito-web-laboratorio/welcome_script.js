document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.animated-button');


    button.addEventListener('mouseover', () => {
        // Add spooky pulse effect on hover
        button.style.animation = 'none';
        button.offsetHeight; // Trigger reflow
        button.style.animation = 'pulse 0.5s ease-out';
    });

    button.addEventListener('click', () => {
        // Add a pulse animation effect when clicked
        button.style.animation = 'none';
        button.offsetHeight; // Trigger reflow
        button.style.animation = 'pulse 0.5s ease-out';
    });
});

// Add the pulse animation to the stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);