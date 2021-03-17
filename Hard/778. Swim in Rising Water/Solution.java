class Solution {
    public int swimInWater(int[][] grid) {
        int n = grid.length, t = 0, row = 0, col = 0;
        boolean[][] visited = new boolean[n][n];

        DSU uf = new DSU(n * n);
        PriorityQueue<Integer> queue = new PriorityQueue();

        Map<Integer, Integer> elevations = new HashMap();
        for (int r = 0; r < n; r++)
            for (int c = 0; c < n; c++)
                elevations.put(grid[r][c], r * n + c);

        queue.add(grid[0][0]);
        visited[0][0] = true;

        while (!queue.isEmpty()) {
            int cur = queue.poll();
            int x = elevations.get(cur);

            t = cur > t ? cur : t;
            uf.union(0, x);

            row = x / n;
            col = x - (row * n);

            if (row > 0 && !visited[row - 1][col]) {
                queue.add(grid[row - 1][col]);
                visited[row - 1][col] = true;
            }

            if (row < n - 1 && !visited[row + 1][col]) {
                queue.add(grid[row + 1][col]);
                visited[row + 1][col] = true;
            }

            if (col > 0 && !visited[row][col - 1]) {
                queue.add(grid[row][col - 1]);
                visited[row][col - 1] = true;
            }

            if (col < n - 1 && !visited[row][col + 1]) {
                queue.add(grid[row][col + 1]);
                visited[row][col + 1] = true;
            }

            if (uf.connected(0, n * n - 1))
                return t;
        }

        return t;
    }

    private class DSU {
        int[] parent;
        int[] size;

        public DSU(int n) {
            parent = new int[n];
            size = new int[n];

            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        public int find(int p) {
            while (p != parent[p])
                p = parent[p];
            return p;
        }

        public boolean connected(int p, int q) {
            return find(p) == find(q);
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
        }
    }
}