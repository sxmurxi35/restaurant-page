import "./styles/home.css";
import bgImage1 from "./img/background3.jpg";
import bgImage2 from "./img/background4.jpg";
import interiorImage from "./img/background.jpg";

function homePage() {
  const main = document.querySelector("main");
  main.textContent = "";

  const descriptionSect = document.createElement("section");
  descriptionSect.classList.add("description");

  const text1 =
    "Our restaurant brings the heart of Italy to your table. Inspired by traditional Italian kitchens, we serve handcrafted pastas, wood-fired pizzas, and timeless recipes made with fresh, high-quality ingredients. From rich sauces simmered slowly to perfectly baked bread, every dish is prepared with care, simplicity, and love—just the way it’s done in Italy.";

  const text2 =
    "Step inside and feel at home. Our kitchen celebrates Italian comfort food, where recipes are passed down, meals are meant to be shared, and every guest is treated like family. Whether you’re here for a casual lunch or a long dinner with friends, we invite you to slow down, savor the flavors, and enjoy la dolce vita.";

  const text3 =
    "Rooted in tradition and refined for today, our restaurant offers a modern take on Italian classics. Fresh ingredients, bold flavors, and thoughtful presentation come together in a warm, contemporary space. It’s Italian dining—simple, elegant, and unforgettable.";

  const sect1 = mainSect("Classic & Inviting", text1, "section1");
  const img1 = imgMainSect(bgImage1);
  const img2 = imgMainSect(interiorImage);
  const sect2 = mainSect("Cozy & Family-Style", text2, "section2");
  const sect3 = mainSect("Modern Italian", text3, "section3");
  const img3 = imgMainSect(bgImage2);

  descriptionSect.append(sect1, img1, img2, sect2, sect3, img3);
  main.append(descriptionSect);
}

function mainSect(title, text, id) {
  const section = document.createElement("section");
  section.classList.add("desc-sect");
  section.id = id;

  const sectTitle = document.createElement("h2");
  sectTitle.textContent = title;

  const sectPara = document.createElement("p");
  sectPara.textContent = text;

  section.append(sectTitle, sectPara);
  return section;
}

function imgMainSect(src) {
  const img = document.createElement("img");
  img.src = src;

  const imgSect = document.createElement("sect");
  imgSect.classList.add("img-sect");

  imgSect.append(img);
  return imgSect;
}

export default homePage;
