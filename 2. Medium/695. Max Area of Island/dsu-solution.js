/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length, n = grid[0].length;
  const wuf = new DSU(m * n);
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] == 0) continue;

      for (let [h, v] of dirs) {
        let x = r + v;
        let y = c + h;

        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] == 0) continue;

        wuf.union(r * n + c, x * n + y);
      }
    }
  }

  return wuf.maxSize();

  function DSU(size) {
    this.parent = new Array(size).fill(-1);
    this.count = size;
    this.find = function (p) {
      while (this.parent[p] >= 0) p = this.parent[p];
      return p;
    };

    this.union = function (p, q) {
      let rootP = this.find(p);
      let rootQ = this.find(q);

      if (rootP == rootQ) return;

      if (this.parent[rootP] < this.parent[rootQ]) {
        this.parent[rootP] += this.parent[rootQ];
        this.parent[rootQ] = rootP;
      } else {
        this.parent[rootQ] += this.parent[rootP];
        this.parent[rootP] = rootQ;
      }
      this.count--;
    };

    this.maxSize = function () {
      let max = 0;
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (this.parent[i * n + j] < 0 && grid[i][j] == 1) {
            max = Math.max(max, -this.parent[i * n + j]);
          }
        }
      }
      return max;
    };
  }
};
