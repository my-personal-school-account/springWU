// fetch('header.html')
//   .then(res => res.text())
//   .then(html => {
//     document.getElementById('header-placeholder').innerHTML = `
//        <button class="nav-button">
//          <i class="material-icons">menu</i>
//        </button>
//      `;
//
//   });
//
// class HeaderTemplate extends HTMLElement {
//   connectedCallback() {
//     this.attachShadow({ mode: 'open' });
//
//     this.shadowRoot.innerHTML = `
//       <header>
//         <button class="nav-button">
//           <i class="material-icons">menu</i>
//         </button>
//       </header>
//     `;
//   }
// }
// customElements.define('header-template', HeaderTemplate);

//// Code to generate list of items in nav and give links and set special class
//// on the selected one
//
//   const selectedName = "selected-item";
//   const current = this.getAttribute(selectedName);
//   // const links = ['main', 'other'];
//
//   this.shadowRoot.innerHTML = `
//     <header>
//       <nav>
//         nav
//         ${links.map(l =>
//     `<a href="${l === 'main' ? 'index' : l}.html" ${l === current ? `class="${selectedName}"` : ''}>${l}</a>`
//   ).join('')}
//       </nav>
//     </header>
//   `;
// }
