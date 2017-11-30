// @flow

export default function clamp(
  value: number,
  min: number,
  max: number,
): number {
  let val = value;
  if (val < min) val = min;
  if (val > max) val = max;

  return val;
}
