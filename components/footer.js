class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="page__footer page-footer">
        <p class="page-footer__disclaimer page-footer__disclaimer--marquee">Данный веб-сайт (интернет-ресурс) создан в рамках курса &laquo;Веб-разработчик 20.35&raquo; ОЦ КПиД Университета ИТМО и распространен в ознакомительных целях ради кеков других веб-разработчиков и (или) рекрутеров</p>
        <p aria-hidden="true" class="page-footer__disclaimer page-footer__disclaimer--marquee">Данный веб-сайт (интернет-ресурс) создан в рамках курса &laquo;Веб-разработчик 20.35&raquo; ОЦ КПиД Университета ИТМО и распространен в ознакомительных целях ради кеков других веб-разработчиков и (или) рекрутеров</p>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
