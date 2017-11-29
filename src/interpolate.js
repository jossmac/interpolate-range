// @flow

import clamp from './clamp';

type Range = [number, number];

export default function interpolate(
  input: Range,
  output: Range,
  useClamp?: boolean,
  customSlope?: number,
): (number) => mixed {
  const minX = input[0];
  const maxX = input[1];
  const minY = output[0];
  const maxY = output[1];

  const defaultSlope = (maxY - minY) / (maxX - minX);
  const slope = customSlope ? customSlope : defaultSlope;

  function make(x: number) {
    const res = (x - minX) * (slope + minY);

    return useClamp ? clamp(res, minY, maxY) : res;
  }

  return make;
}
