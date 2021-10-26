/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  if (points.length < 3) return points.length;
  let max = 2;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let slopeJ = slope(points[i], points[j]);
      let cur = 2;
      for (let k = j + 1; k < points.length; k++) {
        let slopeK = slope(points[i], points[k]);
        if (slopeK == slopeJ) {
          cur += 1;
          max = Math.max(max, cur);
        }
      }
    }
  }

  return max;

  function slope(p, q) {
    if (p[1] == q[1]) return +0;
    if (p[0] == q[0]) return Infinity;

    return (p[1] - q[1]) / (p[0] - q[0]);
  }
};
