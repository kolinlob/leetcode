/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let directions = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];

  let p = 0;
  for (let row = 0; row < grid.length; row++)
    for (let col = 0; col < grid[row].length; col++)
      if (grid[row][col] == 1)
        p += dfs(row, col);

  return p;

  function dfs(r, c) {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[r].length ||
      grid[r][c] == 0
    ) return 1;

    if (grid[r][c] == undefined) return 0;

    grid[r][c] = undefined;
    return directions.reduce((acc, [y, x]) => acc + dfs(r + y, c + x), 0);
  }
};
