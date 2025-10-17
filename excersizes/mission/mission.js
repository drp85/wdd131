const themeSelector = document.getElementById('theme-selector');
const bodyElement = document.body;
const logoImage = document.querySelector('footer img');
const lightLogoSrc = "https://wdd131.netlify.app/assets/images/byui-logo_blue.webp";
const darkLogoSrc = "https://wdd131.netlify.app/assets/images/byui-logo_white.png";

function changeTheme(event) {
    const selectedTheme = event.target.value;

    if (selectedTheme === 'dark') {
        bodyElement.classList.add('dark');
        logoImage.src = darkLogoSrc;
    } else {
        bodyElement.classList.remove('dark');
        logoImage.src = lightLogoSrc;
    }
}
themeSelector.addEventListener('change', changeTheme);
