/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const spiral = [],
    limit = matrix.length * matrix[0].length;
  let [row, col, level] = [0, -1, 0];

  while (spiral.length < limit) {
    [row, col, level] = right(row, col + 1, level, matrix[0].length - level);
    [row, col, level] = down(row + 1, col, level, matrix.length - level);
    [row, col, level] = left(row, col - 1, level, matrix[row].length - level);
    [row, col, level] = up(row - 1, col, level, matrix.length - level);
  }

  return spiral;

  function right(row, col, lev, lim) {
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length)
      for (let i = 0; i < lim && spiral.length < limit; i++)
        spiral.push(matrix[row][col + i]);
    return [row, col + lim - 1, lev + 1];
  }

  function down(row, col, lev, lim) {
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length)
      for (let i = 0; i < lim && spiral.length < limit; i++)
        spiral.push(matrix[row + i][col]);
    return [row + lim - 1, col, lev];
  }

  function left(row, col, lev, lim) {
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length)
      for (let i = 0; i < lim && spiral.length < limit; i++)
        spiral.push(matrix[row][col - i]);
    return [row, col - lim + 1, lev + 1];
  }

  function up(row, col, lev, lim) {
    if (row >= 0 && row < matrix.length && col >= 0 && col < matrix[row].length)
      for (let i = 0; i < lim && spiral.length < limit; i++)
        spiral.push(matrix[row - i][col]);
    return [row - lim + 1, col, lev];
  }
};
