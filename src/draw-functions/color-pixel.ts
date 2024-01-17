export const drawPixel = (
  canvas: HTMLCanvasElement,
  pixelUpdate: PixelUpdate,
) => {
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = `rgb(${pixelUpdate.r}, ${pixelUpdate.g}, ${pixelUpdate.b})`;
  ctx.fillRect(pixelUpdate.x, pixelUpdate.y, 1, 1); // Draw a 1x1 pixel at position (x, y)
};
