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
        // Get the link from the card's data attribute
        const link = card.getAttribute('data-link');
        
        // If a link exists, open it on click
        if (link) {
            card.addEventListener('click', () => {
                window.open(link, '_blank');
            });
        }

        // Keyboard accessibility
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && link) {
                window.open(link, '_blank');
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

// Get the video element
const video = document.getElementById('pitchVideo');

// Function to check if the video is in view
function checkVideoInView() {
    const rect = video.getBoundingClientRect();
    const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

    // If the video is in view, unmute it, otherwise keep it muted
    if (isInView) {
        video.muted = false;  // Unmute when in view
    } else {
        video.muted = true;   // Keep muted when out of view
    }
}

// Detect scroll events to check if the video is in view
window.addEventListener('scroll', checkVideoInView);

// Call the function initially in case the video is already in view on page load
checkVideoInView();

// Restart the video when it finishes
video.addEventListener('ended', function() {
    video.currentTime = 0; // Reset video to the start
    video.play(); // Play the video again
});

