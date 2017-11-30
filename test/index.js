import test from 'tape';
import { interpolate, smoothStep } from '../src';

test('interpolate provides correct result', function(t) {
  const int = interpolate([100, 200], [0, 100]);
  const intClamped = interpolate([-100, 100], [0, 1], true);
  const intSmooth = interpolate([50, 500], [0, 1], true, smoothStep);

  // basic
  t.equal( int(1), -99 )
  t.equal( int(150), 50 )
  t.equal( int(250), 150 )
  t.equal( int(12), -88 )
  t.equal( int(-120), -220 )

  // clamped
  t.equal( intClamped(100), 1 )
  t.equal( intClamped(500), 1 )
  t.equal( intClamped(-50), 0.25 )
  t.equal( intClamped(50), 0.75 )
  t.equal( intClamped(-150), 0 )

  // alt function
  t.equal( intSmooth(100), 0.034293552812071325 )
  t.equal( intSmooth(200), 0.25925925925925924 )
  t.equal( intSmooth(300), 0.5829903978052127 )
  t.equal( intSmooth(400), 0.8737997256515775 )
  t.equal( intSmooth(600), 1 )

  t.end()
})
