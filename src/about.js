export function loadAboutPage(contentDiv){
    const container = document.createElement("div");
    container.classList.add("about");

    const h1 = document.createElement("h1");
    h1.innerText = "This is the about page"

    container.append(h1);
    contentDiv.append(container);
}