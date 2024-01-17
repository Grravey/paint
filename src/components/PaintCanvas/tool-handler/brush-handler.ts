import { interpolatePoints, padPoint } from '../../../draw-functions/index';
import { HandlerProps } from './handler.types';

const SIZE = 100;
// const COLOR = { r: 255, g: 255, b: 255 }; // white
const COLOR = { r: 0, g: 0, b: 0 }; // black
export const brushHandler = ({
  newPoint,
  previousPoint,
}: HandlerProps): PixelUpdate[] => {
  {
    if (previousPoint) {
      const previousPadded = padPoint(previousPoint, SIZE);
      const newPadded = padPoint(newPoint, SIZE);
      let interpolatedPoints = [];
      for (let i = 0; i < previousPadded.length; i++) {
        let batch = interpolatePoints({
          origin: previousPadded[i],
          destination: newPadded[i],
        });
        interpolatedPoints.push(...batch);
      }

      return interpolatedPoints.map(({ x, y }) => ({
        x,
        y,
        ...COLOR,
      }));
    } else {
      const padded = padPoint(newPoint, SIZE);
      return padded.map(({ x, y }) => ({
        x,
        y,
        ...COLOR,
      }));
    }
  }
};
