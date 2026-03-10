export function createHomePage(){
    const contentDiv = document.createElement("div");
    const h1 = document.createElement("h1");
    h1.innerText = "WELCOME TO OUR FAMILY HOTEL AND RESTAURANT CITY HOUSE";
    const p = document.createElement("p");
    p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nihilassumenda aliquam itaque accusamus sint expedita dolorum natus ut nammaiores ipsum velit, quia dolor. Fugiat voluptatibus temporibus oditeius."
    const button = document.createElement("button");
    button.innerText = "Explore our menu"
    contentDiv.append(h1);
    contentDiv.append(p);
    contentDiv.append(button);

    return contentDiv;
}