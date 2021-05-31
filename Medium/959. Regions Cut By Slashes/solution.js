/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function (grid) {
  const n = grid.length;
  const wuf = new dsu(4 * n * n);

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      let root = 4 * (n * r + c);
      let slash = grid[r][c];

      if (slash != "\\") {
        wuf.union(0 + root, 1 + root);
        wuf.union(2 + root, 3 + root);
      }

      if (slash != "/") {
        wuf.union(0 + root, 2 + root);
        wuf.union(1 + root, 3 + root);
      }

      if (r - 1 >= 0) wuf.union(0 + root, 3 + root - 4 * n);
      if (r + 1 < n)  wuf.union(3 + root, 0 + root + 4 * n);
      if (c - 1 >= 0) wuf.union(1 + root, 2 + root - 4);
      if (c + 1 < n)  wuf.union(2 + root, 1 + root + 4);
    }
  }

  return wuf.count;

  function dsu(n) {
    this.parent = new Array(n).fill(-1);
    this.count = n;

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
  }
};
