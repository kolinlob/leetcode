/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length, n = mat[0].length;

  if (m * n != r * c) return mat;

  const res = new Array(r).fill(null).map((i) => new Array(c));

  mat
    .reduce((acc, cur) => acc.concat(cur), [])
    .forEach((v, i) => (res[(i / c) >> 0][i % c] = v));

  return res;
};
