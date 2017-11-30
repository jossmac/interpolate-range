// @flow

import clamp from './clamp';

export default function smoothStep(
  from: number,
  to: number,
  val: number,
) {
  const x = clamp(from, to, (val - from) / (to - from));

  return x * x * (3 - 2 * x);
}
