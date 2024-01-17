import './components/index.js';

window.state = {
  colorMap: new Array(600)
    .fill(0)
    .map(() => new Array(1024).fill('rgb(255, 255, 255)')),
  selectedTool: null,
};
