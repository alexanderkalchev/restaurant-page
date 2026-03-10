import "./style.css"
import {createHomePage} from "./home.js"

const homeLinkButton = document.querySelector("#home-link");
const menuLinkButton = document.querySelector("#menu-link");
const aboutLinkButton = document.querySelector("#about-link");

const divContent = document.querySelector("div#content");

homeLinkButton.addEventListener("click", (e) => {
    const homePage = createHomePage();
    divContent.append(homePage);
});

