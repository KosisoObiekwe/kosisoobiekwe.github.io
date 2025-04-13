// ===== SMOOTH SCROLLING =====
const smoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// ===== PROJECT CARD INTERACTIONS =====
const projectInteractions = () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Click opens Behance in new tab
        card.addEventListener('click', () => {
            window.open('https://www.behance.net/Kozzy_', '_blank');
        });

        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                window.open('https://www.behance.net/Kozzy_', '_blank');
            }
        });

        // Hover effect enhancement
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(255, 159, 28, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 15px rgba(255, 159, 28, 0.1)';
        });
    });
};

// ===== FORM VALIDATION (FOR FUTURE CONTACT FORM) =====
const setupFormValidation = () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add validation logic here
            console.log('Form would submit now');
        });
    }
};

// ===== INITIALIZE EVERYTHING (EXCLUDING MOBILE MENU) =====
document.addEventListener('DOMContentLoaded', () => {
    smoothScroll(); // Smooth scroll still works
    projectInteractions();
    setupFormValidation();
    
    // Console greeting
    console.log('%c👋 Hello! This portfolio was crafted by Kosi Obiekwe', 
        'color: #FF9F1C; font-size: 14px; font-weight: bold;');
});