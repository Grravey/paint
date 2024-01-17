export class LayerSidebar extends HTMLElement {
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
                    #layer-sidebar {
                        background-color: #bdbdbd;
                        border-top: 1px solid #D5D5D5;
                        width: 225px;
                        height: 100%;
                        display: flex;
                    }
                </style>

                <div id="layer-sidebar">
                </div>
                `;

    this.isInitialized = true;
  }
}

customElements.define('layer-sidebar', LayerSidebar);
