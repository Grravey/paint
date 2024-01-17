export class BottomBar extends HTMLElement {
  isInitialized: boolean;

  constructor() {
    super();
    this.isInitialized = false;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        #bottom-bar {
          background-color: #D5D5D5;
          border-top: 1px solid #d5d5d5;
          border-left: 3px solid #bdbdbd;
          border-right: 3px solid #bdbdbd;
          height: 47px;
          width: 100%;
        }
      </style>

      <div id="bottom-bar"></div>
      `;

    this.isInitialized = true;
  }
}

customElements.define('bottom-bar', BottomBar);
