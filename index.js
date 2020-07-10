const nav = document.getElementsByTagName("nav")[0];
const header = document.getElementsByTagName("header")[0];
const links = document.querySelectorAll(".link");
const anchors = document.querySelectorAll(".anchor");
const exitButton = document.querySelector(".fa-times-circle");

const handleNavClick = e => {
  nav.classList.add("menu");
  nav.children[0].style.display = "block";
  nav.children[0].style.position = "absolute";
  links.forEach(l => {
    l.classList.add("big")
    l.children[0].style.display = "block";
  });
};
const handleExitClick = e => {
  e.stopPropagation();
  nav.classList.remove("menu");
  nav.children[0].style.display = "none";
  links.forEach(l => {
    l.classList.remove("big")
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
  triggerElement: ".picture",
})
  .setClassToggle(".picture", "grow")
  .addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#where",
})
  .setClassToggle(".line", "longer")
  .addTo(controller);
