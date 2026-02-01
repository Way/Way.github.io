export interface VisualParams {
  seed: number;
  hue1: number;
  hue2: number;
  shapeCount: number;
  rotation: number;
  scale: number;
  patternType: 'circles' | 'polygons' | 'waves' | 'grid';
  opacity: number;
}

function hashString(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) + hash + input.charCodeAt(i)) & 0xffffffff;
  }
  return Math.abs(hash);
}

/** Deterministic seed-based pseudo-random: returns 0..1 */
function seededRandom(seed: number, index: number): number {
  const x = Math.sin(seed * 9301 + index * 49297) * 49979;
  return x - Math.floor(x);
}

export function deriveVisualParams(title: string, pubDate: string): VisualParams {
  const seed = hashString(title + pubDate);
  const hue1 = seed % 360;
  const hue2 = (seed * 7 + 137) % 360;
  const shapeCount = 4 + (seed % 9);
  const rotation = (seed * 13) % 360;
  const scale = 0.6 + ((seed % 80) / 100);
  const patterns = ['circles', 'polygons', 'waves', 'grid'] as const;
  const patternType = patterns[(seed >> 8) % 4];
  const opacity = 0.3 + ((seed % 40) / 100);
  return { seed, hue1, hue2, shapeCount, rotation, scale, patternType, opacity };
}

/** Generate deterministic shape positions for a given seed, count, and bounds */
export function generateShapePositions(
  seed: number,
  count: number,
  width: number,
  height: number
): Array<{ cx: number; cy: number; r: number }> {
  const shapes = [];
  for (let i = 0; i < count; i++) {
    shapes.push({
      cx: seededRandom(seed, i * 3) * width,
      cy: seededRandom(seed, i * 3 + 1) * height,
      r: 15 + seededRandom(seed, i * 3 + 2) * 50,
    });
  }
  return shapes;
}
