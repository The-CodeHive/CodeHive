// Check and apply the stored theme from localStorage

function applyTheme() {

    const theme = localStorage.getItem('theme');

    if (theme === 'light') {

        document.body.classList.add('light-mode');

    }

}



// Apply the theme on page load

window.onload = applyTheme;   
