import { interpolatePoints } from '../../../draw-functions/interpolate-point';
import { HandlerProps } from './handler.types';

export const pencilHandler = ({
  newPoint,
  previousPoint,
}: HandlerProps): PixelUpdate[] => {
  if (previousPoint) {
    const interpolatedPoints = interpolatePoints({
      origin: previousPoint,
      destination: newPoint,
    });

    return interpolatedPoints.map((point) => ({
      x: point.x,
      y: point.y,
      r: 0,
      g: 0,
      b: 0,
    }));
  } else {
    return [{ x: newPoint.x, y: newPoint.y, r: 0, g: 0, b: 0 }];
  }
};
