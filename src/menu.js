const salads = [
  {
    name: "Classic Caesar Salad",
    desc: "Crisp romaine lettuce, garlic herb croutons, and shaved parmesan cheese tossed in a creamy Caesar dressing.",
    price: 10.99
  },
  {
    name: "Mediterranean Greek Salad",
    desc: "Fresh tomatoes, cucumbers, red onions, green peppers, Kalamata olives, and feta cheese drizzled with extra virgin olive oil and oregano.",
    price: 11.50
  },
  {
    name: "Fresh Caprese",
    desc: "Slices of fresh mozzarella cheese and ripe tomatoes, topped with sweet basil leaves and a rich balsamic glaze reduction.",
    price: 9.99
  },
  {
    name: "Signature Cobb Salad",
    desc: "Mixed greens topped with grilled chicken breast, crispy bacon, hard-boiled eggs, sliced avocado, and blue cheese crumbles.",
    price: 14.50
  },
  {
    name: "Quinoa Power Bowl",
    desc: "Nutrient-packed quinoa mixed with baby spinach, roasted chickpeas, cherry tomatoes, and a zesty lemon-tahini vinaigrette.",
    price: 12.99
  }
];

const mains = [
  {
    name: "Pan-Seared Atlantic Salmon",
    desc: "Fresh salmon fillet served with roasted asparagus, garlic herb quinoa, and a light lemon-dill butter sauce.",
    price: 18.50
  },
  {
    name: "Classic Ribeye Steak",
    desc: "12oz grilled bone-in ribeye, accompanied by creamy mashed potatoes, seasonal vegetables, and a rich peppercorn reduction.",
    price: 26.99
  },
  {
    name: "Wild Mushroom Risotto",
    desc: "Creamy Arborio rice slow-cooked with a blend of wild mushrooms, parmesan cheese, and a drizzle of white truffle oil.",
    price: 15.99
  },
  {
    name: "Roasted Herb Chicken",
    desc: "Half chicken marinated in fresh herbs and citrus, oven-roasted until golden, served with rustic root vegetables.",
    price: 16.50
  },
  {
    name: "Spicy Arrabbiata Pasta",
    desc: "Al dente penne pasta tossed in a fiery tomato and garlic sauce, garnished with fresh basil and shaved pecorino.",
    price: 13.99
  }
];

const platters = [
  {
    name: "Artisan Cheese & Charcuterie",
    desc: "A selection of premium cured meats and artisanal cheeses, served with honeycomb, mixed nuts, and toasted baguette slices.",
    price: 24.00
  },
  {
    name: "Mediterranean Mezze Board",
    desc: "Classic hummus, smoky baba ganoush, crispy falafel, tzatziki, marinated olives, and warm pita bread.",
    price: 18.50
  },
  {
    name: "Seafood Tower",
    desc: "Freshly shucked oysters, chilled jumbo shrimp, crab claws, and smoked salmon, accompanied by cocktail sauce and lemon wedges.",
    price: 35.00
  },
  {
    name: "BBQ Pitmaster Sampler",
    desc: "Slow-smoked brisket, tender pulled pork, and sticky BBQ ribs, served with coleslaw, baked beans, and sweet cornbread.",
    price: 28.99
  },
  {
    name: "Vegan Tapas Assortment",
    desc: "Crispy patatas bravas, blistered shishito peppers, garlic mushrooms, and fresh tomato basil bruschetta.",
    price: 19.50
  }
];

const desserts = [
  {
    name: "Warm Chocolate Lava Cake",
    desc: "Decadent chocolate cake with a molten center, served with a scoop of vanilla bean ice cream and fresh berries.",
    price: 8.99
  },
  {
    name: "Classic Tiramisu",
    desc: "Layers of espresso-soaked ladyfingers and rich mascarpone cream, dusted with premium cocoa powder.",
    price: 7.50
  },
  {
    name: "New York Style Cheesecake",
    desc: "Dense and creamy traditional cheesecake on a buttery graham cracker crust, topped with a sweet strawberry compote.",
    price: 8.00
  },
  {
    name: "Lemon Panna Cotta",
    desc: "Silky Italian cream dessert infused with fresh lemon zest, topped with a mixed berry coulis and fresh mint.",
    price: 7.00
  },
  {
    name: "Rustic Apple Cobbler",
    desc: "Warm, cinnamon-spiced baked apples under a crispy buttery crumble, finished with a drizzle of salted caramel.",
    price: 6.99
  }
];

const beverages = [
  {
    name: "House-Made Lemonade",
    desc: "Freshly squeezed lemons, pure cane sugar, and filtered water, garnished with a sprig of mint.",
    price: 4.00
  },
  {
    name: "Peach Iced Tea",
    desc: "Cold-brewed black tea lightly sweetened with natural peach nectar and served over ice with a lemon wedge.",
    price: 3.50
  },
  {
    name: "Classic Margarita",
    desc: "Silver tequila, fresh lime juice, and orange liqueur, served on the rocks with a salted rim.",
    price: 9.50
  },
  {
    name: "Local Craft IPA",
    desc: "A refreshing India Pale Ale from a local brewery, featuring bright citrus notes and a crisp, hoppy finish.",
    price: 6.50
  },
  {
    name: "Artisan Cappuccino",
    desc: "A double shot of rich espresso topped with perfectly steamed milk and a thick layer of velvety milk foam.",
    price: 4.50
  }
];

export function loadMenuPage(contentDiv, option){
    const container = document.createElement("div");
    container.classList.add("menu");

    //SIDEBAR
    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");
    const h1 = document.createElement("button");
    h1.innerText = "SALADS"
    h1.classList.add("salads-button");
    const h2 = document.createElement("button");
    h2.innerText = "MAINS"
    h2.classList.add("mains-button");
    const h3 = document.createElement("button");
    h3.innerText = "PLATTERS"
    h3.classList.add("platters-button");
    const h4 = document.createElement("button");
    h4.innerText = "DESSERT"
    h4.classList.add("desserts-button");
    const h5 = document.createElement("button");
    h5.innerText = "BEVERAGES"
    h5.classList.add("beverages-button");
    const h6 = document.createElement("button");
    h6.innerText = "ALL";
    h6.classList.add("all-button");
    sidebar.append(h1, h2, h3, h4, h5, h6);
   

    //SIDEBAR

    const main = document.createElement("div");
    main.classList.add("main")

    if(option === "ALL" || option === "SALADS"){
        const sectionA = document.createElement("section");
        const sectionAHeader = document.createElement("h3");
        sectionAHeader.innerText = "Salads"
        sectionA.append(sectionAHeader)
        for (const salad of salads) {
            const element = document.createElement("div");
            const name = document.createElement("h4");
            name.innerText = salad["name"];
            const desc = document.createElement("p");
            desc.innerText = salad["desc"];
            const price = document.createElement("h4"); 
            price.innerText = salad["price"];
            const text = document.createElement("div");
            text.classList.add("text");
            text.append(name, desc);
            element.append(text, price);
            sectionA.append(element);
        }
        main.append(sectionA);
    }

    if(option === "ALL" || option === "MAINS"){
        const sectionB = document.createElement("section");
        const sectionBHeader = document.createElement("h3");
        sectionBHeader.innerText = "Mains"
        sectionB.append(sectionBHeader)
        for (const main of mains) {
            const element = document.createElement("div");
            const name = document.createElement("h4");
            name.innerText = main["name"];
            const desc = document.createElement("p");
            desc.innerText = main["desc"];
            const price = document.createElement("h4"); 
            price.innerText = main["price"];
            const text = document.createElement("div");
            text.classList.add("text");
            text.append(name, desc);
            element.append(text, price);
            sectionB.append(element);
        }
        main.append(sectionB);
    }
    
    if(option === "ALL" || option === "PLATTERS"){
        const sectionC = document.createElement("section");
        const sectionCHeader = document.createElement("h3");
        sectionCHeader.innerText = "Platters"
        sectionC.append(sectionCHeader)
        for (const platter of platters) {
            const element = document.createElement("div");
            const name = document.createElement("h4");
            name.innerText = platter["name"];
            const desc = document.createElement("p");
            desc.innerText = platter["desc"];
            const price = document.createElement("h4"); 
            price.innerText = platter["price"];
            const text = document.createElement("div");
            text.classList.add("text");
            text.append(name, desc);
            element.append(text, price);
            sectionC.append(element);
        }
        main.append(sectionC);
    }

    if(option === "ALL" || option === "DESSERTS"){
        const sectionD = document.createElement("section");
        const sectionDHeader = document.createElement("h3");
        sectionDHeader.innerText = "Desserts"
        sectionD.append(sectionDHeader)
        for (const dessert of desserts) {
            const element = document.createElement("div");
            const name = document.createElement("h4");
            name.innerText = dessert["name"];
            const desc = document.createElement("p");
            desc.innerText = dessert["desc"];
            const price = document.createElement("h4"); 
            price.innerText = dessert["price"];
            const text = document.createElement("div");
            text.classList.add("text");
            text.append(name, desc);
            element.append(text, price);
            sectionD.append(element);
        }
        main.append(sectionD);
    }
    
    if(option === "ALL" || option === "BEVERAGES"){
        const sectionE = document.createElement("section");
        const sectionEHeader = document.createElement("h3");
        sectionEHeader.innerText = "Beverages"
        sectionE.append(sectionEHeader)
        for (const beverage of beverages) {
            const element = document.createElement("div");
            const name = document.createElement("h4");
            name.innerText = beverage["name"];
            const desc = document.createElement("p");
            desc.innerText = beverage["desc"];
            const price = document.createElement("h4"); 
            price.innerText = beverage["price"];
            const text = document.createElement("div");
            text.classList.add("text");
            text.append(name, desc);
            element.append(text, price);
            sectionE.append(element);
        }
        main.append(sectionE);
    }
    

    
    container.append(sidebar, main);
    contentDiv.append(container);
}
