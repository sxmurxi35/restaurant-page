import homePage from "./home";
import "./styles/style.css";

homePage();

const navBtns = document.querySelectorAll(".nav-btn");
navBtns.forEach((btn) => {
  const btnID = ["home-btn", "menu-btn", "about-btn"];
  btn.addEventListener("click", (e) => {
    if (e.target.id == btnID[0]) {
      document.querySelector(`#${btnID[0]}`).classList.add("selected");
      document.querySelector(`#${btnID[1]}`).classList?.remove("selected");
        document.querySelector(`#${btnID[2]}`).classList?.remove("selected");
        
        homePage()
    }

    if (e.target.id == btnID[1]) {
      document.querySelector(`#${btnID[0]}`).classList?.remove("selected");
      document.querySelector(`#${btnID[1]}`).classList.add("selected");
      document.querySelector(`#${btnID[2]}`).classList?.remove("selected");
    }

    if (e.target.id == btnID[2]) {
      document.querySelector(`#${btnID[0]}`).classList?.remove("selected");
      document.querySelector(`#${btnID[1]}`).classList?.remove("selected");
      document.querySelector(`#${btnID[2]}`).classList.add("selected");
    }
  });
});
