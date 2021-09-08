/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length,
    n = grid[0].length,
    dirs = [
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 0, y: -1 },
    ];

  const queue = [];

  for (let r = 0; r < m; r++)
    for (let c = 0; c < n; c++)
        if (grid[r][c] == 2)
            queue.push({ x: r, y: c });

  let minutes = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift();
      for (let dir of dirs) {
        const x = cur.x + dir.x;
        const y = cur.y + dir.y;
        if (x >= 0 && y >= 0 && x < m && y < n && grid[x][y] == 1) {
          grid[x][y] = 2;
          queue.push({ x, y });
        }
      }
    }

    if (queue.length) minutes++;
  }

  return findFirstFresh() ? -1 : minutes;

  function findFirstFresh() {
    for (let r = 0; r < m; r++)
      for (let c = 0; c < n; c++)
        if (grid[r][c] == 1)
            return { x: r, y: c };
  }
};
