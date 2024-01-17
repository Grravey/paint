interface SetColorXYProps {
  x: number;
  y: number;
  r: number;
  g: number;
  b: number;
}

const MAX_X = 1024;
const MAX_Y = 600;

function assertCondition(condition: boolean, message: string): boolean {
  if (!condition) {
    console.log(message);
    return false;
    // throw new Error(message)
  }
  return true;
}

export const setColorXY = ({ x, y, r, g, b }: SetColorXYProps) => {
  const c1 = assertCondition(
    x >= 0 && x < MAX_X,
    `x must be in range 0 <= x < 512, value: ${x}`,
  );
  const c2 = assertCondition(
    y >= 0 && y < MAX_Y,
    `y must be in range 0 <= y < 512, value: ${y}`,
  );
  const c3 = assertCondition(
    r >= 0 && r <= 255,
    `r must be in range 0 <= r <= 255, value: ${r}`,
  );
  const c4 = assertCondition(
    g >= 0 && g <= 255,
    `g must be in gange 0 <= g <= 255, value: ${g}`,
  );
  const c5 = assertCondition(
    b >= 0 && b <= 255,
    `b must be in bange 0 <= b <= 255, value: ${b}`,
  );

  if (c1 && c2 && c3 && c4 && c5) {
    window.state.colorMap[y][x] = `rgb(${r}, ${g}, ${b})`;
  }
};
