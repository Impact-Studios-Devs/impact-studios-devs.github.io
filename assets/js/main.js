document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Battlespace game placeholder
    const gameContainer = document.getElementById('game-container');
    if (gameContainer) {
        gameContainer.innerHTML = '<p>Game interface coming soon!</p>';
    }
});