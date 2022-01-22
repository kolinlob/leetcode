class Solution {
    public int numIslands(char[][] grid) {
        int height = grid.length;
        int width = grid[0].length;
        char LAND = '1';

        DSU uf = new DSU(height, width, grid);

        for (int row = 0; row < height; row++) {
            for (int col = 0; col < width; col++) {
                if (grid[row][col] != LAND)
                    continue;
                int ix = row * width + col;
                if (row > 0 && grid[row - 1][col] == LAND)
                    uf.union(ix, ix - width);

                if (row < height - 1 && grid[row + 1][col] == LAND)
                    uf.union(ix, ix + width);

                if (col > 0 && grid[row][col - 1] == LAND)
                    uf.union(ix, ix - 1);

                if (col < width - 1 && grid[row][col + 1] == LAND)
                    uf.union(ix, ix + 1);
            }
        }

        return uf.count();
    }

    private class DSU {
        int[] parent;
        int[] size;
        int count;

        public DSU(int m, int n, char[][] grid) {
            parent = new int[m * n];
            size = new int[m * n];
            count = 0;
            for (int i = 0; i < m * n; i++) {
                parent[i] = i;
                size[i] = 1;
            }

            for (int r = 0; r < m; r++)
                for (int c = 0; c < n; c++)
                    count += grid[r][c] == '1' ? 1 : 0;
        }

        public int find(int p) {
            while (p != parent[p]) {
                parent[p] = parent[parent[p]];
                p = parent[p];
            }
            return p;
        }

        public void union(int p, int q) {
            int rootP = find(p);
            int rootQ = find(q);

            if (rootP == rootQ)
                return;

            if (size[rootP] > size[rootQ]) {
                parent[rootQ] = rootP;
                size[rootP] += size[rootQ];
            } else {
                parent[rootP] = rootQ;
                size[rootQ] += size[rootP];
            }
            count--;
        }

        public int count() {
            return count;
        }
    }
}