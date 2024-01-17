import { HandlerProps } from './handler.types';

// const FILL_COLOR = 'rgb(0, 0, 0)';
const FILL_COLOR = 'rgb(255, 255, 255)';

export const bucketHandler = ({
  colorMap,
  newPoint,
}: HandlerProps): PixelUpdate[] => {
  const replaceColor = colorMap[newPoint.y][newPoint.x];
  let bucketQueue = [newPoint];

  colorMap[newPoint.y][newPoint.x] = FILL_COLOR;

  if (replaceColor === FILL_COLOR) {
    console.log('Paint bucket color matches fill color');
    return [];
  }

  while (bucketQueue.length > 0) {
    const { x: nextX, y: nextY } = bucketQueue.shift();

    if (
      nextX - 1 > 0 &&
      nextY - 1 > 0 &&
      colorMap[nextY - 1][nextX - 1] === replaceColor
    ) {
      bucketQueue.push({ x: nextX - 1, y: nextY - 1 });
      colorMap[nextY - 1][nextX - 1] = FILL_COLOR;
    }
    if (nextY - 1 > 0 && colorMap[nextY - 1][nextX] === replaceColor) {
      bucketQueue.push({ x: nextX, y: nextY - 1 });
      colorMap[nextY - 1][nextX] = FILL_COLOR;
    }
    if (
      nextX + 1 < 1024 &&
      nextY - 1 > 0 &&
      colorMap[nextY - 1][nextX + 1] === replaceColor
    ) {
      bucketQueue.push({ x: nextX + 1, y: nextY - 1 });
      colorMap[nextY - 1][nextX + 1] = FILL_COLOR;
    }
    if (nextX - 1 > 0 && colorMap[nextY][nextX - 1] === replaceColor) {
      bucketQueue.push({ x: nextX - 1, y: nextY });
      colorMap[nextY][nextX - 1] = FILL_COLOR;
    }
    if (nextX + 1 < 1024 && colorMap[nextY][nextX + 1] === replaceColor) {
      bucketQueue.push({ x: nextX + 1, y: nextY });
      colorMap[nextY][nextX + 1] = FILL_COLOR;
    }
    if (
      nextX - 1 > 0 &&
      nextY + 1 < 512 &&
      colorMap[nextY + 1][nextX - 1] === replaceColor
    ) {
      bucketQueue.push({ x: nextX - 1, y: nextY + 1 });
      colorMap[nextY + 1][nextX - 1] = FILL_COLOR;
    }
    if (nextY + 1 < 512 && colorMap[nextY + 1][nextX] === replaceColor) {
      bucketQueue.push({ x: nextX, y: nextY + 1 });
      colorMap[nextY + 1][nextX] = FILL_COLOR;
    }
    if (
      nextX + 1 < 1024 &&
      nextY + 1 < 512 &&
      colorMap[nextY + 1][nextX + 1] === replaceColor
    ) {
      bucketQueue.push({ x: nextX + 1, y: nextY + 1 });
      colorMap[nextY + 1][nextX + 1] = FILL_COLOR;
    }
  }

  return [];
};
