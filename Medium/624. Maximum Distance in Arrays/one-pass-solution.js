/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let res = 0,
    n = arrays.length,
    min = arrays[0][0],
    max = arrays[0][arrays[0].length - 1];

  for (let i = 1; i < n; ++i) {
    res = Math.max(
      res,
      Math.abs(arrays[i][arrays[i].length - 1] - min),
      Math.abs(max - arrays[i][0])
    );
    min = Math.min(min, arrays[i][0]);
    max = Math.max(max, arrays[i][arrays[i].length - 1]);
  }

  return res;
};
