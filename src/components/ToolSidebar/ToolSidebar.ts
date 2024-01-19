import { Tool } from '../../enums/tool.enum';

export class ToolSidebar extends HTMLElement {
  isInitialized: boolean;

  constructor() {
    super();
    this.isInitialized = false;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
                <style>
                  #tool-sidebar {
                    align-content: baseline;
                    background-color: #D5D5D5;
                    border-top: 1px solid #d5d5d5;
                    border-left: 3px solid #bdbdbd;
                    border-right: 3px solid #bdbdbd;
                    display: flex;
                    flex-wrap: wrap;
                    height: 100%;
                    width: 56px;
                  }
                </style>

                <div id="tool-sidebar">
                  <tool-selector id="eraser" type=${Tool.SELECT_LASSO}></tool-selector>
                  <tool-selector id="eraser" type=${Tool.SELECT_RECTANGLE}></tool-selector>
                  <tool-selector id="eraser" type=${Tool.ERASER}></tool-selector>
                  <tool-selector id="bucket" type=${Tool.BUCKET}></tool-selector>
                  <tool-selector id="eraser" type=${Tool.COLOR_PICKER}></tool-selector>
                  <tool-selector id="eraser" type=${Tool.MAGNIFYING_GLASS}></tool-selector>
                  <tool-selector id="pencil" type=${Tool.PENCIL}></tool-selector>
                  <tool-selector id="brush" type=${Tool.BRUSH}></tool-selector>
                  <tool-selector id="brush" type=${Tool.SPRAY_CAN}></tool-selector>
                  <tool-selector id="pencil" type=${Tool.TEXT}></tool-selector>
                  <tool-selector id="pencil" type=${Tool.LINE}></tool-selector>
                  <tool-selector id="pencil" type=${Tool.BENDY_LINE}></tool-selector>
                  <tool-selector id="pencil" type=${Tool.RECTANGLE}></tool-selector>
                  <tool-selector id="pencil" type=${Tool.MULTI_LINE}></tool-selector>
                  <tool-selector id="pencil" type=${Tool.CIRCLE}></tool-selector>
                  <tool-selector id="pencil" type=${Tool.OVAL}></tool-selector>
                </div>
                `;

    this.isInitialized = true;
  }
}

customElements.define('tool-sidebar', ToolSidebar);
