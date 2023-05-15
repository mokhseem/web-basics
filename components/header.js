class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="page__header page-header">
        <h2 class="page-header__title header-title">
          <span aria-hidden="true" class="header-title__text">&gt;</span>Шап<span aria-hidden="true" class="header-title__text header-title__text--blink">_</span>очка
        </h2>
        <nav class="page__nav main-navigation">
          <ul class="main-navigation__site-navigation site-navigation">
            <li class="site-navigation__item">
              <a class="site-navigation__link" href="index.html">about</a>
            </li>
            <li class="site-navigation__item">
              <a class="site-navigation__link" href="library.html">library</a>
            </li>
            <li class="site-navigation__item">
              <a class="site-navigation__link" href="joy.html">joy</a>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
