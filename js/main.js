fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-template').innerHTML = html;
    document.querySelector("button.nav-button").addEventListener("click", toggleMenu);
  });

function toggleMenu() {
  document.querySelector("nav").classList.toggle("show");
}
