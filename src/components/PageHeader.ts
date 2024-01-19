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
          height: 18px;
          display: flex;
          padding-top: 2px;
          padding-left: 5px;
          font-family: 'tahoma';
          font-size: 13px;
          cursor: default;
        }

        #menu-item {
          padding: 0 4px 0 4px;
          user-select: none;
        }

        #menu-item:hover {
          border-top: 1px solid white;
          border-left: 1px solid white;
          border-right: 1px solid #A0A0A0;
        }
      </style>

      <div id="header">
        <div id="menu-item">File</div>
        <div id="menu-item">Edit</div>
        <div id="menu-item">View</div>
        <div id="menu-item">Image</div>
        <div id="menu-item">Colors</div>
        <div id="menu-item">Help</div>
      </div>
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
