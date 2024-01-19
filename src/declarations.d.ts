declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare type ToolUpdateData = {
  newTool: Tool;
};

declare enum Tool {
  BENDY_LINE = 'BendyLine',
  BRUSH = 'Brush',
  BUCKET = 'Bucket',
  CIRCLE = 'Circle',
  COLOR_PICKER = 'ColorPicker',
  ERASER = 'Eraser',
  LINE = 'Line',
  MAGNIFYING_GLASS = 'MagnifyingGlass',
  MULTI_LINE = 'MultiLine',
  OVAL = 'Oval',
  PENCIL = 'Pencil',
  RECTANGLE = 'Rectangle',
  SELECT_LASSO = 'SelectLasso',
  SELECT_RECTANGLE = 'SelectRectangle',
  SPRAY_CAN = 'SprayCan',
  TEXT = 'Text',
}

interface Point {
  x: number;
  y: number;
}

declare type PixelUpdate = {
  x: number;
  y: number;
  r: number;
  b: number;
  g: number;
};
