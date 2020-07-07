const nav = document.getElementsByTagName("nav")[0];
const header = document.getElementsByTagName("header")[0];
const links = document.querySelectorAll(".link");
const anchors = document.querySelectorAll(".anchor");
const exitButton = document.querySelector(".fa-times-circle");

const handleNavClick = e => {
  nav.style.width = "100vw";
  nav.style.height = "85vh";
  nav.children[0].style.display = "block";
  nav.children[0].style.position = "absolute";
  links.forEach(l => {
    l.style.width = "93vw";
    l.style.height = "calc(70vh/6)";
    l.children[0].style.display = "block";
  });
};
const handleExitClick = e => {
  e.stopPropagation();
  nav.style.width = "auto";
  nav.style.height = "100%";
  nav.children[0].style.display = "none";
  links.forEach(l => {
    l.style.width = "30px";
    l.style.height = "4px";
    l.children[0].style.display = "none";
  });
};

nav.addEventListener("click", handleNavClick);
exitButton.addEventListener("click", handleExitClick);
anchors.forEach(a => a.addEventListener("click", handleExitClick));

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
  triggerElement: "#why",
})
  .setClassToggle("#why", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#who",
})
  .setClassToggle("#who", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#what",
})
  .setClassToggle("#what", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#where",
})
  .setClassToggle("#where", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#contact",
})
  .setClassToggle("#contact", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".rauchbock",
})
  .setClassToggle(".rauchbock", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".pilsner",
})
  .setClassToggle(".pilsner", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".stout",
})
  .setClassToggle(".stout", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".ale",
})
  .setClassToggle(".ale", "fade-in")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".person",
})
  .setClassToggle(".person", "grow")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: ".line",
})
  .setClassToggle(".line", "longer")
  .addTo(controller);
