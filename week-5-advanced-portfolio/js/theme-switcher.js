const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check local storage on load
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.setAttribute('data-theme', 'dark');
    toggleBtn.innerText = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
    if (htmlElement.getAttribute('data-theme') === 'dark') {
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleBtn.innerText = '🌓 Dark Mode';
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleBtn.innerText = '☀️ Light Mode';
    }
});