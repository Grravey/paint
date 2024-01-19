import {
  drawPixel,
  drawColorMap,
  setColorXY,
} from '../../draw-functions/index';

import { EventName, Tool } from '../../enums/index';
import { uiEventHandler } from '../../events/event-handler';
import { TOOL_CURSOR_MAP } from './tool-cursor-mapper';
import { toolHandler } from './tool-handler/index';

export class PaintCanvas extends HTMLElement {
  isInitialized = false;
  isMouseDown = false;
  isMouseHover = false;
  previousPoint: Point | null = null;
  selectedTool: Tool | null;
  updateQueue: PixelUpdate[] = [];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['percentage'];
  }

  handleToolUpdated(updatedTool: Tool) {
    this.selectedTool = updatedTool;
    const canvas = <HTMLCanvasElement>(
      this.shadowRoot.getElementById('main-canvas')
    );

    const { fileName, offsetX, offsetY } = TOOL_CURSOR_MAP[this.selectedTool];
    canvas.style.cursor = `url(assets/${fileName}) ${offsetX} ${offsetY}, auto`;
  }

  handleMouseClick(event: MouseEvent) {
    if (this.selectedTool === Tool.BUCKET) {
      const canvas = <HTMLCanvasElement>(
        this.shadowRoot.getElementById('main-canvas')
      );
      const rect = canvas.getBoundingClientRect();

      // Calculate the relative position
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      toolHandler({
        tool: this.selectedTool,
        newPoint: { x, y },
        previousPoint: this.previousPoint,
        colorMap: window.state.colorMap,
      });

      drawColorMap(canvas, window.state.colorMap);
    }
  }

  handleMouseMove(event: MouseEvent) {
    if (!this.isMouseDown) {
      return;
    }

    const canvas = this.shadowRoot.getElementById('main-canvas');
    const rect = canvas.getBoundingClientRect();

    // Calculate the relative position
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (this.previousPoint?.x === x && this.previousPoint?.y === y) {
      return;
    }

    const hasLocation = this.updateQueue.find((update) => {
      return update.x === x && update.y === y;
    });

    if (!hasLocation) {
      const updates = toolHandler({
        tool: this.selectedTool,
        newPoint: { x, y },
        previousPoint: this.previousPoint,
        colorMap: window.state.colorMap,
      });

      this.updateQueue.push(...updates);
      this.previousPoint = { x, y };
    }
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
            <style>
                #canvas-container {
                  background-color: #808080;
                  flex: 1;
                  height: 100%;

                  width: 1024px;
                }
                
                #main-canvas {
                  background-color: white;
                  cursor: url('assets/precise.png') 16 16, auto;
                }
                
                </style>
                <div id="canvas-container">
                  <canvas width="1024" height="600" id="main-canvas"></canvas>
                </div>
                `;
    this.isInitialized = true;

    setInterval(() => {
      if (this.updateQueue.length > 0) {
        const canvas = <HTMLCanvasElement>(
          this.shadowRoot.getElementById('main-canvas')
        );

        while (this.updateQueue.length > 0) {
          const update = this.updateQueue.shift();
          setColorXY(update);
          drawPixel(canvas, update);
        }
      }
    }, 10);

    uiEventHandler.listen(
      EventName.TOOL_UPDATED,
      ({ detail: updatedTool }: { detail: Tool }) => {
        this.handleToolUpdated(updatedTool);
      },
    );

    this.shadowRoot.addEventListener('mousemove', (event: MouseEvent) => {
      this.handleMouseMove(event);
    });

    this.shadowRoot.addEventListener('click', (event: MouseEvent) => {
      this.handleMouseClick(event);
    });

    this.shadowRoot.addEventListener('mousedown', (event: MouseEvent) => {
      this.isMouseDown = true;
      this.handleMouseMove(event);
    });

    this.shadowRoot.addEventListener('mouseup', () => {
      this.isMouseDown = false;
      this.previousPoint = null;
    });
  }
}

customElements.define('paint-canvas', PaintCanvas);
