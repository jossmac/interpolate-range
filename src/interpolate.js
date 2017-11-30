// @flow

import linearStep from './linearStep';

type Range = [number, number];
type Step = typeof linearStep;
type Props = {
  inputRange: Range,
  outputRange: Range,
  clamp?: boolean,
  fn?: Step,
};

export default function interpolate({
  inputRange: [minX, maxX],
  outputRange: [minY, maxY],
  clamp,
  fn = linearStep
}: Props): (number) => mixed {
  const slope = (maxY - minY) / (maxX - minX);

  function makeInterpolationFunc(x: number) {
    const res = (x - minX) * (slope + minY);

    return fn(minY, maxY, res, clamp);
  }

  return makeInterpolationFunc;
}
