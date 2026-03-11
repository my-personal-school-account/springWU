const togglableNavString = "nav.togglable";
const sideButtonArrowString = "button.nav-button.side-button";

fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById("header-template").innerHTML = html;
    document.querySelectorAll("button.nav-button").forEach((button) => button.addEventListener("click", toggleMenu));

    let togglableNav = document.querySelector(togglableNavString);

    if (window.innerWidth >= 1000) {
      togglableNav.classList.add("show");
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        togglableNav.classList.add("with-transitions");
      });
    });

  });

function toggleMenu() {
  document.querySelector(togglableNavString).classList.toggle("show");

  document.querySelector(sideButtonArrowString).classList.toggle("is-left");
}
