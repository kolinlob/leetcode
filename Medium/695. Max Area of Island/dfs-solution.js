/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const directions = [
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 0, y: -1 },
  ];

  let max = 0;

  for (let row = 0; row < grid.length; row++)
    for (let col = 0; col < grid[row].length; col++)
      if (grid[row][col] == 1)
        max = Math.max(max, dfs(row, col));

  return max;

  function dfs(row, col) {
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] != 1)
      return 0;

    grid[row][col] = -1;

    return (1 + directions.reduce((acc, cur) => acc + dfs(row + cur.x, col + cur.y), 0));
  }
};
