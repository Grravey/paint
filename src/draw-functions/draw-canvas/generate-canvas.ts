const getRandomRgbNumber = () => Math.floor(Math.random() * 255);
const generateRandomColor = () =>
  `rgb(${getRandomRgbNumber()}, ${getRandomRgbNumber()}, ${getRandomRgbNumber()})`;

export const generateCanvas = (x = 1024, y = 600) => {
  return new Array(y)
    .fill(0)
    .map(() => new Array(x).fill(generateRandomColor()));
};
