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
  BUCKET = 'Bucket',
  BRUSH = 'Brush',
  LINE = 'Line',
  ERASER = 'Eraser',
  PENCIL = 'Pencil',
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
