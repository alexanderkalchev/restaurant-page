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
        else if(e.target.id === "menu-link") loadMenuPage(contentDiv, "ALL");
        else if(e.target.id === "about-link") loadAboutPage(contentDiv);
    } ;
});

contentDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains("salads-button")){
        contentDiv.innerText = "";
        loadMenuPage(contentDiv, "SALADS");
    }
    if(e.target.classList.contains("mains-button")){
        contentDiv.innerText = "";
        loadMenuPage(contentDiv, "MAINS");
    }
    if(e.target.classList.contains("platters-button")){
        contentDiv.innerText = "";
        loadMenuPage(contentDiv, "PLATTERS");
    }
    if(e.target.classList.contains("desserts-button")){
        contentDiv.innerText = "";
        loadMenuPage(contentDiv, "DESSERTS");
    }
    if(e.target.classList.contains("beverages-button")){
        contentDiv.innerText = "";
        loadMenuPage(contentDiv, "BEVERAGES");
    }
    if(e.target.classList.contains("all-button")){
        contentDiv.innerText = "";
        loadMenuPage(contentDiv, "ALL");
    }
    if(e.target.classList.contains("menu-button")){
        contentDiv.innerText = "";
        loadMenuPage(contentDiv, "ALL");
    }
});

