/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  return search(0, matrix[0].length - 1);

  function search(row, col) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[row].length)
      return false;

    if (matrix[row][col] == target)
        return true;

    if (matrix[row][col] > target)
        return search(row, col - 1);
    else 
        return search(row + 1, col);
  }
};
