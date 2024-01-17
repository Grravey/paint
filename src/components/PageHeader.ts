export class PageHeader extends HTMLElement {
  isInitialized: boolean;
  percentage: string;

  constructor() {
    super();
    this.percentage = '0';
    this.isInitialized = false;
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['percentage'];
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        #header {
          background-color: #D5D5D5;
          width:100%;
          height: 19px;
          display: flex;
        }
      </style>

      <div id="header"></div>
      `;

    this.isInitialized = true;
  }

  // handlePercentageChanged(percentage: string) {
  //     this.percentage = Math.min(parseInt(percentage), 100).toString();

  //     if (this.isInitialized) {
  //         const indicatorElement = this.shadowRoot.getElementById('progress-bar-indicator');
  //         const percentageElement = this.shadowRoot.getElementById('progress-bar-percentage');
  //         indicatorElement.style.width = this.percentage + '%';
  //         percentageElement.textContent = this.percentage + '%';
  //     }
  // }

  // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  //     if (name === 'percentage') {
  //         this.handlePercentageChanged(newValue)
  //     }
  // }
}

customElements.define('page-header', PageHeader);
