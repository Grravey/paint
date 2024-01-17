interface InterpolateProps {
  destination: Point;
  origin: Point;
}

interface CalculateIncrementProps {
  increment: number;
  origin: Point;
  distance: number;
  distanceX: number;
  distanceY: number;
}

const calculateIncrement = ({
  origin,
  increment,
  distance,
  distanceX,
  distanceY,
}: CalculateIncrementProps): Point => {
  const x = Math.round(origin.x + (increment / distance) * distanceX);
  const y = Math.round(origin.y + (increment / distance) * distanceY);

  return { x, y };
};

export const interpolatePoints = ({
  origin,
  destination,
}: InterpolateProps): Point[] => {
  const distance = Math.sqrt(
    Math.pow(destination.x - origin.x, 2) +
      Math.pow(destination.y - origin.y, 2),
  );
  const distanceX = destination.x - origin.x;
  const distanceY = destination.y - origin.y;

  const interpolationPoints = [];

  for (let i = 1; i <= distance; i++) {
    const nextPoint = calculateIncrement({
      origin,
      increment: i,
      distance,
      distanceX,
      distanceY,
    });
    interpolationPoints.push(nextPoint);
  }

  console.log('interpolationPoints.length: ', interpolationPoints.length);

  return interpolationPoints;
};
