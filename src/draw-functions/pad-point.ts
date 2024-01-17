// const sizes = {
//   1: 1,
//   9: 9,
//   25: 25,
// };

export const padPoint = ({ x, y }: Point, size: number): Point[] => {
  const paddedPoints: Point[] = [];

  const sqrt = Math.sqrt(size);
  const halfDistance = Math.floor(sqrt / 2);

  // return [
  //   { x: x - halfDistance, y: y - halfDistance },
  //   { x: x + halfDistance, y: y + halfDistance },
  // ];
  // console.log('half distance: ', halfDistance);
  for (let i = 0; i < halfDistance; i++) {
    for (let j = 0; j < halfDistance; j++) {
      // Top left
      if (x - i > 0 && y - j > 0) {
        paddedPoints.push({ x: x - i, y: y - j });
      } else {
        paddedPoints.push({ x, y });
      }

      // Bottom left
      if (x - i > 0 && y + j < 512) {
        paddedPoints.push({ x: x - i, y: y + j });
      } else {
        paddedPoints.push({ x, y });
      }

      // Top Right
      if (x + i < 1024 && y - j > 0) {
        paddedPoints.push({ x: x + i, y: y - j });
      } else {
        paddedPoints.push({ x, y });
      }

      // Bottom Right
      if (x + i < 1024 && y + j < 512) {
        paddedPoints.push({ x: x + i, y: y + j });
      } else {
        paddedPoints.push({ x, y });
      }
    }
  }

  return paddedPoints;
};
