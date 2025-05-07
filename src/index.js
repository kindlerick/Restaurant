import "./styles.css";
import { generateMainPage } from "./pages/main.js";
import { generateContactPage } from "./pages/contact.js";
import { generateMenuPage } from "./pages/menu.js";

const homeButton = document.getElementById('home');
const contactButton = document.getElementById('contact');
const menuButton = document.getElementById('menu');
const mainContent = document.getElementById('content');

    generateMainPage();

homeButton.addEventListener('click', () => {
    mainContent.innerHTML = "";
    generateMainPage();
});

contactButton.addEventListener('click', () => {
    mainContent.innerHTML = "";
    generateContactPage();
});

menuButton.addEventListener('click', () => {
    mainContent.innerHTML = "";
    generateMenuPage();
});