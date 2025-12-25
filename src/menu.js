import "./styles/menu.css";

function menuPage() {
  const main = document.querySelector("main");
  main.textContent = "";

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-sect");

  const antipastiArray = [
    ["Bruschetta Classica", 8],
    ["Caprese Salad", 10],
    ["Calamari Fritti", 12],
    ["Arancini", 9],
  ];

  const pastaArray = [
    ["Spaghetti Carbonara", 16],
    ["Penne Arrabbiata", 14],
    ["Fettuccine Alfredo", 15],
    ["Lasagna della Casa", 17],
  ];
  const pizzaArray = [
    ["Margherita", 14],
    ["Pepperoni", 16],
    ["Quattro Formaggi", 17],
    ["Prosciutto & Arugula", 18],
  ];

  const secondiArray = [
    ["Chicken Parmigiana", 19],
    ["Veal Marsala", 22],
    ["Salmon al Limone", 21],
    ["Eggplant Parmigiana", 18],
  ];

  const antipasti = menuSectCreate("Antipasti", antipastiArray);
  const pasta = menuSectCreate("Pasta", pastaArray);
  const pizza = menuSectCreate("Pizza", pizzaArray);
  const secondi = menuSectCreate("Secondi", secondiArray);

  menuSection.append(antipasti, pasta, pizza, secondi);
  main.append(menuSection);
}

function menuSectCreate(title, arr) {
  const sect = document.createElement("section");

  const sectTitle = document.createElement("h3");
  sectTitle.textContent = title;

  const sectThings = document.createElement("section");
  for (let i = 0; i < arr.length; i++) {
    const para = document.createElement("p");
    para.textContent = `${arr[i][0]} - ${arr[i][1]}$`;
    sectThings.appendChild(para);
  }
  sect.append(sectTitle, sectThings);

  return sect;
}

export default menuPage;
