import { brushHandler } from './brush-handler';
import { bucketHandler } from './bucket-handler';
import { eraserHandler } from './eraser-handler';
import { pencilHandler } from './pencil-handler';

import { Tool } from '../../../enums/index';

interface ToolHandlerProps {
  tool: Tool;
  previousPoint: Point;
  newPoint: Point;
  colorMap: string[][];
}

export const toolHandler = ({ tool, ...rest }: ToolHandlerProps) => {
  switch (tool) {
    case Tool.BRUSH:
      return brushHandler(rest);
    case Tool.BUCKET:
      return bucketHandler(rest);
    case Tool.ERASER:
      return eraserHandler(rest);
    case Tool.PENCIL:
      return pencilHandler(rest);
    default:
      console.log('no handler for: ', tool);
      return pencilHandler(rest);
  }
};
