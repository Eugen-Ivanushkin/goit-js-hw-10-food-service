import './styles.css';
import cardExamples from './menu.json';
import menuTemplate from './templates//menu-template.hbs';

const menuContainer = document.querySelector("ul.js-menu");
const menuCards = createMenuCards(cardExamples);
menuTemplate({});

menuContainer.insertAdjacentHTML('beforeend', menuCards);

function createMenuCards(cardExamples) {
    return menuTemplate(cardExamples);
}