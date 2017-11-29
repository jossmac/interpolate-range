import test from 'tape';
import interpolate from './src';

test('interpolate provides correct result', function(t) {
  const int = interpolate([100, 200], [0, 100]);
  const intClamped = interpolate([-100, 100], [0, 1], true);
  const intSlope = interpolate([50, 500], [0, 1], false, 0.08);

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

  // alt slope
  t.equal( intSlope(100), 4 )
  t.equal( intSlope(500), 36 )
  t.equal( intSlope(-50), -8 )
  t.equal( intSlope(50), 0 )
  t.equal( intSlope(-150), -16 )

  t.end()
})
