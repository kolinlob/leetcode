/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  const [i, j] = ops.reduce(
    (acc, op) => {
      acc[0] = Math.min(op[0], acc[0]);
      acc[1] = Math.min(op[1], acc[1]);
      return acc;
    },
    [m, n]
  );

  return i * j;
};
