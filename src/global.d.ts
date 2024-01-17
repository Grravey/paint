interface GlobalState {
  colorMap: string[][];
  selectedTool: string;
}

declare global {
  interface Window {
    state: GlobalState;
  }
}

export {};
