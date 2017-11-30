// @flow

import clamp from './clamp';
import step from './step';

type Range = [number, number];
type Step = typeof step;

export default function interpolate(
  input: Range,
  output: Range,
  useClamp?: boolean,
  fn?: Step = step,
): (number) => mixed {
  const minX = input[0];
  const maxX = input[1];
  const minY = output[0];
  const maxY = output[1];

  const slope = (maxY - minY) / (maxX - minX);

  function make(x: number) {
    const res = (x - minX) * (slope + minY);

    return fn(minY, maxY, res, useClamp)
  }

  return make;
}
