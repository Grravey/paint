import { EventName } from '../../../enums/event-name.enum';
import { uiEventHandler } from '../../../events/event-handler';
import { ICON_MAP } from './icon-mapping';

export class ToolSelector extends HTMLElement {
  toolType: Tool;
  isInitialized: boolean;
  isSelected: boolean;

  constructor() {
    super();
    this.isInitialized = false;
    this.attachShadow({ mode: 'open' });
  }

  handleToolUpdated(updatedTool: Tool | null) {
    this.isSelected = updatedTool === this.toolType;

    const toolSelector = this.shadowRoot.getElementById('tool-selector');
    if (this.isSelected) {
      toolSelector.style.borderLeft = '1px solid black';
      toolSelector.style.borderTop = '1px solid black';
      toolSelector.style.borderRight = '1px solid #e6e6e6';
      toolSelector.style.borderBottom = '1px solid #e6e6e6';
    } else {
      toolSelector.style.borderLeft = '1px solid #e6e6e6';
      toolSelector.style.borderTop = '1px solid #e6e6e6';
      toolSelector.style.borderRight = '1px solid black';
      toolSelector.style.borderBottom = '1px solid black';
    }
  }

  connectedCallback() {
    this.toolType = <Tool>this.getAttribute('type');

    this.shadowRoot.innerHTML = `
      <style>
        #tool-selector {
          background-color: #D5D5D5;
          border-top: 1px solid #e6e6e6;
          border-left: 1px solid #e6e6e6;
          border-right: 2px solid black;
          border-bottom: 2px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 25px;
          width: 25px;
        }

        #tool-icon {
          background-image: url('assets/tools.png');
          background-repeat: no-repeat;
          background-position: calc(-16px * ${ICON_MAP[this.toolType]}) 0;
          height: 16px;
          width: 16px;
        }
      </style>
      <div id="tool-selector">
        <div id="tool-icon"></div>
      </div>
    `;

    this.isInitialized = true;

    this.handleToolUpdated(null);

    this.shadowRoot.addEventListener('click', () => {
      uiEventHandler.emit<Tool>(EventName.TOOL_UPDATED, this.toolType);
    });

    uiEventHandler.listen(
      EventName.TOOL_UPDATED,
      ({ detail: updatedTool }: { detail: Tool }) => {
        this.handleToolUpdated(updatedTool);
      },
    );
  }
}

customElements.define('tool-selector', ToolSelector);
