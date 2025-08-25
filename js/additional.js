function applyTheme(mode) {

    const darkModeVideo = document.getElementById('darkModeVideo');

    const lightModeVideo = document.getElementById('lightModeVideo');

    const bodyElement = document.body;



    if (mode === 'light') {

        // Apply light mode

        bodyElement.classList.add('light-mode');

        darkModeVideo.classList.add('hidden');

        lightModeVideo.classList.remove('hidden');

    } else {

        // Apply dark mode

        bodyElement.classList.remove('light-mode');

        lightModeVideo.classList.add('hidden');

        darkModeVideo.classList.remove('hidden');

    }

}



// Event listener for the light/dark mode toggle

document.getElementById('lightModeToggle').addEventListener('change', function() {

    const mode = this.checked ? 'light' : 'dark';

    // Save the current mode to local storage

    localStorage.setItem('theme', mode);

    // Apply the theme

    applyTheme(mode);

});



// On page load, check local storage and apply the theme

window.addEventListener('DOMContentLoaded', () => {

    const savedMode = localStorage.getItem('theme') || 'light'; // Default to light mode

    applyTheme(savedMode);

    // Set the toggle switch to the correct position based on saved mode

    document.getElementById('lightModeToggle').checked = (savedMode === 'light');

});
