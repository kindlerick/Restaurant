import { restaurantDescriptionText } from "/home/kindlerick/Desktop/Restaurant/src/helper.js";
import burgerImage from "/home/kindlerick/Desktop/Restaurant/src/images/burgerimage.jpg";
import burgerLogo from "/home/kindlerick/Desktop/Restaurant/src/images/burgerlogo.png";

export const generateMainPage = () => {

    const topContentBox = document.createElement("div");
    topContentBox.classList = "topContentBox";
    content.appendChild(topContentBox);

    const textBox = document.createElement("div");
    topContentBox.appendChild(textBox);
    textBox.id = "textBox";
    textBox.textContent = "Check out this burger joint";

    const bottomContentBox = document.createElement("div");
    bottomContentBox.classList = "bottomContentBox";
    content.appendChild(bottomContentBox);

    const burgerimageElement = document.createElement("img"); 
    burgerimageElement.src = burgerImage;
    topContentBox.appendChild(burgerimageElement);
    burgerimageElement.id = "burgerImage"; 

    const burgerlogoElement = document.createElement("img"); 
    burgerlogoElement.src = burgerLogo;
    topContentBox.appendChild(burgerlogoElement);
    burgerlogoElement.id = "burgerLogo";

    const mainContentTextHeadline = document.createElement("h1");
    bottomContentBox.appendChild(mainContentTextHeadline);
    mainContentTextHeadline.textContent = "Burger Paradise"

    const mainContentTextText = document.createElement("p");
    bottomContentBox.appendChild(mainContentTextText);
    mainContentTextText.textContent = restaurantDescriptionText;

}

