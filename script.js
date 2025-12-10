// 1. Select Elements using DOM manipulation
const themeButton = document.getElementById('theme-toggle');
const body = document.body;
const contactForm = document.querySelector('form');
const feedbackMsg = document.getElementById('form-feedback');

// 2. Check Local Storage for Theme Preference (Day 6)
// This runs immediately when the page loads
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeButton.textContent = '☀️ Light Mode';
}

// 3. Toggle Dark Mode Function (Day 5)
themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update Button Text & Save to Local Storage
    if (body.classList.contains('dark-mode')) {
        themeButton.textContent = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeButton.textContent = '🌙 Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

// 4. Form Validation Function (Day 4)
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop the form from actually sending/refreshing

    // Get values from inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Reset feedback message
    feedbackMsg.textContent = '';
    feedbackMsg.className = '';

    // Simple Validation Logic
    if (name.length < 2) {
        showFeedback('Name must be at least 2 characters long.', 'error');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        showFeedback('Please enter a valid email address.', 'error');
        return;
    }

    if (message.length < 10) {
        showFeedback('Message must be at least 10 characters long.', 'error');
        return;
    }

    // If all checks pass
    showFeedback('Message sent successfully! (Not really, just JS demo)', 'success');
    
    // Clear the form fields
    contactForm.reset();
});

// Helper function to display messages
function showFeedback(message, type) {
    feedbackMsg.textContent = message;
    if (type === 'error') {
        feedbackMsg.classList.add('error-msg');
    } else {
        feedbackMsg.classList.add('success-msg');
    }
}