// @flow

import clamp from './clamp';

export default function linearStep(
  from: number,
  to: number,
  x: number,
  useClamp?: boolean,
) {
  return useClamp ? clamp(from, to, x) : x;
}
