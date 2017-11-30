# Interpolate Range

Numeric range interpolation à la ReactNative's `AnimatedValue.interpolate()`. No dependencies, handy for animation or plotting points on a chart.

### Props

Name | Type | Description
--- | --- | ---
`input` | `[number, number]` | Input range _(required)_
`output` | `[number, number]` | Output range _(required)_
`clamp` | `boolean` | Restrict the returned value to the output range
`fn` | `(from, to, x) => number` | Alternative function to call on the value


### Usage

```js
import interpolate from 'interpolate-range';

function generateCurve({ floor, ceil, total }) {
  const data = [];
  const int = interpolate({
		inputRange: [floor, ceil],
		outputRange: [0, 1],
		clamp: true,
	});

  for (let k = 0; k < total; k++) {
    data.push({ x: k, y: int(k) });
  }

  return data;
}
```
