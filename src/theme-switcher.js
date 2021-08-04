import './styles.css';
import './index.html';

const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const STORAGE_KEY = 'theme';
const body = document.querySelector("body");
const themeSwitcher = document.querySelector("#theme-switch-toggle");
//const compiledTemplate = require("./template.handlebars");

themeSwitcher.addEventListener('change', onThemeSwitcherChange);

if (localStorage.getItem(STORAGE_KEY) === theme.DARK) {
    themeSwitcher.checked = true;
    body.classList.add(theme.DARK);
} else {
    body.classList.add(theme.LIGHT);
}

function onThemeSwitcherChange() {

    if (themeSwitcher.checked === true) {
        body.classList.add(theme.DARK);
        body.classList.remove(theme.LIGHT);
        
        localStorage.setItem(STORAGE_KEY, theme.DARK);
        
        return;
    } body.classList.add(theme.LIGHT);
   
    body.classList.remove(theme.DARK);
    
    localStorage.setItem(STORAGE_KEY, theme.LIGHT);
    
}