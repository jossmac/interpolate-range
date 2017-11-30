// @flow

export default function clamp(
  from: number,
  to: number,
  x: number,
): number {
  let val = x;
  if (val < from) val = from;
  if (val > to) val = to;

  return val;
}
