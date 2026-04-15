const togglableNavString = "nav.togglable";
const sideButtonArrowString = "button.nav-button.side-button";
const fadeLayerString = "div.fade-layer";
const articleHeadingString = "article h1, article h2, article h3, article h4, article h5, article h6";
const divTreeString = togglableNavString + " #div-tree";

fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById("header-template").innerHTML = html;
  });

fetch('footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer-template").innerHTML = html;
  });

document.querySelectorAll(".nav-button").forEach((button) => button.addEventListener("click", toggleMenu));

let togglableNav = document.querySelector(togglableNavString);
let sideButton = document.querySelector(sideButtonArrowString);

if (window.innerWidth >= 1000) {
  togglableNav.classList.add("show");
  document.querySelector(fadeLayerString).classList.add("show");
  sideButton.classList.add("is-left");
}

let divTree = document.querySelector(divTreeString);
let articleHeaders = document.querySelectorAll(articleHeadingString);
articleHeaders.forEach((header) => {

  let heading_number = header.tagName.charAt(1);
  let padding_text = (heading_number - 1) * 1.5 + "em";

  let text = header.textContent;
  header.id = text;
  divTree.insertAdjacentHTML("beforeend", `
          <li style="margin-left:${padding_text};">
            <a href="#${text}">${text}</a>
          </li>
        `)

});

requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    togglableNav.classList.add("with-transitions");
    sideButton.classList.add("with-transitions");
  });
});

function toggleMenu() {
  document.querySelector(togglableNavString).classList.toggle("show");
  document.querySelector(fadeLayerString).classList.toggle("show");

  document.querySelector(sideButtonArrowString).classList.toggle("is-left");
}
