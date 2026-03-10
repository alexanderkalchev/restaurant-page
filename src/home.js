export function loadHomePage(contentDiv){
    const container = document.createElement("div");
    container.classList.add("home");
    const h1 = document.createElement("h1");
    h1.innerText = "WELCOME TO OUR FAMILY HOTEL AND RESTAURANT CITY HOUSE";
    const p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihilassumenda aliquam itaque accusamus sint expedita dolorum natus ut nammaiores ipsum velit, quia dolor. Fugiat voluptatibus temporibus oditeius."
    const button = document.createElement("button");
    button.innerText = "Explore our menu"
    container.append(h1);
    container.append(p);
    container.append(button);
    contentDiv.append(container);
}