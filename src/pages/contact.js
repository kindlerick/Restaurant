import { restaurantAddress } from "../helper.js";

const content = document.getElementById('content');

export const generateContactPage = () => {

    const topContactPageContentBox = document.createElement("div");
    topContactPageContentBox.classList = "topContactPageContentBox";
    content.appendChild(topContactPageContentBox);

    const topContactPageContentBoxContent = document.createElement("div");
    topContactPageContentBoxContent.classList = "topContactPageContentBoxContent";
    topContactPageContentBox.appendChild(topContactPageContentBoxContent);
    topContactPageContentBoxContent.textContent = restaurantAddress;
    
    topContactPageContentBoxContent.style.whiteSpace = 'pre';
};

