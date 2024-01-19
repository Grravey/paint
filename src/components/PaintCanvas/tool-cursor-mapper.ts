type ToolCursor = {
  fileName: string;
  offsetX: number;
  offsetY: number;
};

export const TOOL_CURSOR_MAP: Record<Tool, ToolCursor> = {
  BendyLine: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  Brush: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  Bucket: {
    fileName: 'bucket.png',
    offsetX: 0,
    offsetY: 16,
  },
  Circle: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  ColorPicker: {
    fileName: 'color-picker.png',
    offsetX: 0,
    offsetY: 16,
  },
  Eraser: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  Line: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  MagnifyingGlass: {
    fileName: 'magnifying-glass.png',
    offsetX: 32,
    offsetY: 32,
  },
  Pencil: {
    fileName: 'pencil.png',
    offsetX: -16,
    offsetY: 16,
  },
  MultiLine: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  Oval: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  Rectangle: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  SelectLasso: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  SelectRectangle: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
  SprayCan: {
    fileName: 'spray-can.png',
    offsetX: 0,
    offsetY: 16,
  },
  Text: {
    fileName: 'precise.png',
    offsetX: 16,
    offsetY: 16,
  },
};
