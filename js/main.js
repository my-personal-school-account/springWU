fetch('header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('header-template').innerHTML = html;
    document.querySelector("button.nav-button").addEventListener("click", toggleMenu);
    if (window.innerWidth >= 1000) {
      document.querySelector("nav.togglable").classList.add("show");
    }
  });

function toggleMenu() {
  document.querySelector("nav.togglable").classList.toggle("show");
}
