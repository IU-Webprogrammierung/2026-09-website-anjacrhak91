// Apply the color scheme and update the toggle state if the header is available.
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    const themeButton = document.getElementById('theme-toggle');
    if (themeButton) {
        themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    }
}

// Restore the saved preference before the first render; default to light mode.
let initialTheme = 'light';
try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        initialTheme = 'dark';
    }
} catch (e) {
    // Keep the light default if browser storage is unavailable.
}

applyTheme(initialTheme);

// Initialize the toggle after the shared header has been inserted.
function initThemeToggle() {
    const themeButton = document.getElementById('theme-toggle');

    if (!themeButton) return;

    // Sync the newly loaded button with the theme already applied to the page.
    applyTheme(document.documentElement.getAttribute('data-theme'));


    themeButton.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const nextTheme = isDark ? 'light' : 'dark';
        applyTheme(nextTheme);
        try {
            localStorage.setItem('theme', nextTheme);
        } catch (e) {
            // Keep the selected theme active even if the preference cannot be saved.
        }
    });
}