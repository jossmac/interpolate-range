// @flow

import clamp from './clamp';

export default function smootherStep(
  from: number,
  to: number,
  val: number,
  useClamp?: boolean,
) {
  // Scale, bias and saturate x to 0...1 range
  const x = useClamp
    ? clamp((val - from) / (to - from), 0.0, 1.0)
    : val;

  // Evaluate polynomial
  return x * x * x * (x * (x * 6 - 15) + 10);
}
