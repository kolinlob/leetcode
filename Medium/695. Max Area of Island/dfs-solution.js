/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length, n = grid[0].length;
  let maxArea = 0;

  const visited = new Array(m);
  for (let i = 0; i < m; i++) visited[i] = new Array(n).fill(false);

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++)
      maxArea = Math.max(maxArea, dfsArea(r, c));
  }

  return maxArea;

  function dfsArea(r, c) {
    if (r < 0 || c < 0 || r >= m || c >= n || visited[r][c] || grid[r][c] == 0)
      return 0;

    visited[r][c] = true;
    return (
      1 +
      dfsArea(r - 1, c) +
      dfsArea(r + 1, c) +
      dfsArea(r, c - 1) +
      dfsArea(r, c + 1)
    );
  }
};
