function changeLanguage() {
    const language = document.getElementById('language-dropdown').value;

    // Content Containers
    const englishContent = document.getElementById('english-content');
    const germanContent = document.getElementById('german-content');
    const czechContent = document.getElementById('czech-content');

    // Navigation Bar Containers
    const englishNav = document.getElementById('english-nav');
    const germanNav = document.getElementById('german-nav');
    const czechNav = document.getElementById('czech-nav');

    // Hide all content and navigation first
    englishContent.style.display = 'none';
    germanContent.style.display = 'none';
    czechContent.style.display = 'none';
    englishNav.style.display = 'none';
    germanNav.style.display = 'none';
    czechNav.style.display = 'none';

    // Show the appropriate content and navigation based on selected language
    if (language === 'en') {
        document.documentElement.lang = 'en'; // Set language to English
        englishContent.style.display = 'block';
        englishNav.style.display = 'block';
    } else if (language === 'de') {
        document.documentElement.lang = 'de'; // Set language to German
        germanContent.style.display = 'block';
        germanNav.style.display = 'block';
    } else if (language === 'cz') {
        document.documentElement.lang = 'cz'; // Set language to Czech
        czechContent.style.display = 'block';
        czechNav.style.display = 'block';
    }

    // Update the URL with the selected language
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.pushState({ path: url.href }, '', url.href);
}

// Function to get the language from the URL query parameters
function getLanguageFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || 'en'; // Default to 'en' if no language is specified
}

// Load language from URL when the page is loaded
window.onload = function () {
    const language = getLanguageFromUrl();

    // Set the dropdown value based on the URL parameter
    document.getElementById('language-dropdown').value = language;

    // Call the changeLanguage function to update the content
    changeLanguage();

    // Ensure the language dropdown stays in sync with the content
    document.getElementById("language-dropdown").addEventListener("change", function () {
        changeLanguage();
    });
};
