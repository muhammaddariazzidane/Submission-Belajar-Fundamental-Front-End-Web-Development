class Navbar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <header>
      <h1>Notes App</h1>
    </header>
    `;
  }
}

customElements.define('navbar-component', Navbar);
