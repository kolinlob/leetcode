/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const top = row > 0 ? grid[row - 1][col] : 0;
      const left = col > 0 ? grid[row][col - 1] : 0;
      grid[row][col] += row == 0 ? left : col == 0 ? top : Math.min(top, left);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
