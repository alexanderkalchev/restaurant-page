import "./style.css"
import { loadHomePage } from "./home.js"
import { loadMenuPage } from "./menu.js";
import {loadAboutPage} from "./about.js";

// const homeLinkButton = document.querySelector("#home-link");
// const menuLinkButton = document.querySelector("#menu-link");
// const aboutLinkButton = document.querySelector("#about-link");

const navLinks = document.querySelector(".links");

const contentDiv = document.querySelector("div#content");

document.addEventListener("DOMContentLoaded",(e) => {
    loadHomePage(contentDiv);
});

navLinks.addEventListener("click", (e) => {
    if(e.target instanceof HTMLButtonElement){
        contentDiv.innerText = ""
            if(e.target.id === "home-link"){
            loadHomePage(contentDiv);
        }   
        else if(e.target.id === "menu-link") loadMenuPage(contentDiv);
        else if(e.target.id === "about-link") loadAboutPage(contentDiv);
    } ;
});

