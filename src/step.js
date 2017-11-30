// @flow

import clamp from './clamp';

export default function step(
  from: number,
  to: number,
  x: number,
  useClamp?: boolean,
) {
  return useClamp ? clamp(x, from, to) : x;
}
