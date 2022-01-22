/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length, n = mat[0].length;
  const size = m * n;

  if (size != r * c) return mat;

  const res = new Array(r).fill(null).map((i) => new Array(c));

  for (let i = 0; i < size; i++)
    res[(i / c) >> 0][i % c] = mat[(i / n) >> 0][i % n];

  return res;
};
