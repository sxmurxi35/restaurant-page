import "./styles/about.css";

function aboutPage() {
  const main = document.querySelector("main");
  main.textContent = "";

  const aboutSect = document.createElement("section");
  aboutSect.classList.add("about-sect");

  const phonePara = createSect("Call us!", "123-123-123");
  const addressPara = createSect(
    "We're located at",
    "123 Main Street, Night City </br></br> Open hours: </br> Mon-Sun 11:00AM - 10:00PM"
  );

  aboutSect.append(phonePara, addressPara);

  main.append(aboutSect);
}

function createSect(title, text) {
  const sect = document.createElement("section");

  const sectTitle = document.createElement("h3");
  sectTitle.textContent = title;

  const para = document.createElement("p");
  para.innerHTML = text;

  sect.append(sectTitle, para);
  sect.classList.add("about-mini-sect");

  return sect;
}

export default aboutPage;
