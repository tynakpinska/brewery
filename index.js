const nav = document.getElementsByTagName("nav")[0];
const header = document.getElementsByTagName("header")[0];
const links = document.querySelectorAll(".link");
const exitButton = document.querySelector(".fa-times-circle");

const handleNavClick = () => {
  nav.style.width = "100vw";
  nav.style.height = "85vh";
  nav.childNodes[1].style.display = "block";
  nav.childNodes[1].style.position = "absolute";
  links.forEach(l => {
    l.style.width = "93vw";
    l.style.height = "calc(70vh/6)";
    l.childNodes[0].style.display = "block";
  });
};
const handleExitClick = e => {
  e.stopPropagation();
  nav.style.width = "auto";
  nav.style.height = "100%";
  nav.childNodes[1].style.display = "none";
  links.forEach(l => {
    l.style.width = "30px";
    l.style.height = "4px";
    l.childNodes[0].style.display = "none";
  });
};

const handleScroll = () => {
    header.style.transform = "translate(0, -10vh)";
}

nav.addEventListener("click", handleNavClick);
window.addEventListener("scroll", handleScroll);
exitButton.addEventListener("click", handleExitClick);
links.forEach(l => l.addEventListener("click", handleExitClick));
