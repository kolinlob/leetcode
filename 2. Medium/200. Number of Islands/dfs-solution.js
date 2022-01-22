/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const directions = [
    { x: 0, y: 1 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: -1, y: 0 },
  ];

  let islands = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] != "1") continue;
      islands += dfs(row, col) > 0 ? 1 : 0;
    }
  }

  return islands;

  function dfs(row, col) {
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[row].length ||
      grid[row][col] != "1"
    ) return 0;

    grid[row][col] = undefined;
    return directions.reduce((acc, dir) => acc + dfs(row + dir.x, col + dir.y), 1);
  }
};
