'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function interpolate(input, output, useClamp, customSlope) {
  var minX = input[0];
  var maxX = input[1];
  var minY = output[0];
  var maxY = output[1];

  var defaultSlope = (maxY - minY) / (maxX - minX);
  var slope = customSlope ? customSlope : defaultSlope;

  function make(x) {
    var res = (x - minX) * (slope + minY);

    return useClamp ? clamp(res, minY, maxY) : res;
  }

  return make;
}

exports['default'] = interpolate;
exports.clamp = clamp;
