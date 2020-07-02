const nav = document.getElementsByTagName("nav")[0];
const links = document.querySelectorAll(".link");
const exitButton = document.querySelector(".fa-times-circle");

const handleNavClick = () => {
  nav.style.top = "8px";
  nav.childNodes[1].style.display = "block";
  links.forEach(l => {
    l.style.width = "93vw";
    l.style.height = "calc(90vh/6)";
    l.style.marginBottom = "5px";
    l.childNodes[0].style.display = "block";
  });
};
const handleExitClick = e => {
  e.stopPropagation();
  nav.style.left = "10px";
  nav.childNodes[1].style.display = "none";
  links.forEach(l => {
    l.style.width = "30px";
    l.style.height = "4px";
    l.style.marginTop = "2px";
    l.style.marginBottom = "0";
    l.childNodes[0].style.display = "none";
  });
};

nav.addEventListener("click", handleNavClick);
exitButton.addEventListener("click", handleExitClick);
