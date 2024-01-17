import { generateCanvas } from './generate-canvas'

export const drawColorMap = (
  canvas: HTMLCanvasElement,
  colorMap = generateCanvas(),
) => {
  const ctx = canvas.getContext('2d')

  console.log('colorMapLength: ', colorMap.length)
  // Assuming each pixel in the bitmap is 1 canvas pixel in size
  for (let y = 0; y < colorMap.length; y++) {
    for (let x = 0; x < colorMap[y].length; x++) {
      ctx.fillStyle = colorMap[y][x]
      ctx.fillRect(x, y, 1, 1) // Draw a 1x1 pixel at position (x, y)
    }
  }
}
