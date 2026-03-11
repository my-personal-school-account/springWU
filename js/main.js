const togglableNavString = "nav.togglable";
const sideButtonArrowString = "button.nav-button.side-button";
const fadeLayerString = "div.fade-layer";

fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById("header-template").innerHTML = html;
    document.querySelectorAll(".nav-button").forEach((button) => button.addEventListener("click", toggleMenu));

    let togglableNav = document.querySelector(togglableNavString);
    let sideButton = document.querySelector(sideButtonArrowString);

    if (window.innerWidth >= 1000) {
      togglableNav.classList.add("show");
      document.querySelector(fadeLayerString).classList.add("show");
      sideButton.classList.add("is-left");
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        togglableNav.classList.add("with-transitions");
        sideButton.classList.add("with-transitions");
      });
    });

  });

function toggleMenu() {
  document.querySelector(togglableNavString).classList.toggle("show");
  document.querySelector(fadeLayerString).classList.toggle("show");

  document.querySelector(sideButtonArrowString).classList.toggle("is-left");
}
