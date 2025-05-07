import { restaurantMenu } from "../helper";

const content = document.getElementById('content');

export const generateMenuPage = () => {

    const topMenuPageContentBox = document.createElement("div");
    topMenuPageContentBox.classList = "topMenuPageContentBox";
    content.appendChild(topMenuPageContentBox);

    const topMenuPageContentBoxContent = document.createElement("div");
    topMenuPageContentBoxContent.classList = "topMenuPageContentBoxContent";
    topMenuPageContentBox.appendChild(topMenuPageContentBoxContent);
    topMenuPageContentBoxContent.textContent = restaurantMenu;
    
    topMenuPageContentBoxContent.style.whiteSpace = 'pre';
};