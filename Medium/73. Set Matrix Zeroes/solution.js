/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = new Set(), cols = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++)
      if (matrix[i][j] === 0) {
        cols.add(j);
        rows.add(i);
      }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++)
      if (rows.has(i) || cols.has(j))
        matrix[i][j] = 0;
  }
};
