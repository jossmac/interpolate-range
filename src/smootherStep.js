// @flow

import clamp from './clamp';

export default function smootherStep(
  from: number,
  to: number,
  val: number,
) {
  const x = clamp(from, to, (val - from) / (to - from));

  // Evaluate polynomial
  return x * x * x * (x * (x * 6 - 15) + 10);
}
