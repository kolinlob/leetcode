class Solution {
    public int regionsBySlashes(String[] grid) {
        int n = grid.length;
        WUF wuf = new WUF(4 * n * n);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                int root = 4 * (i * n + j);
                char ch = grid[i].charAt(j);

                if (ch != '\\') {
                    wuf.union(0 + root, 1 + root);
                    wuf.union(2 + root, 3 + root);
                }

                if (ch != '/') {
                    wuf.union(0 + root, 2 + root);
                    wuf.union(1 + root, 3 + root);
                }

                if (i - 1 >= 0)
                    wuf.union(0 + root, 3 + root - 4 * n);

                if (i + 1 < n)
                    wuf.union(3 + root, 0 + root + 4 * n);

                if (j - 1 >= 0)
                    wuf.union(1 + root, 2 + root - 4);

                if (j + 1 < n)
                    wuf.union(2 + root, 1 + root + 4);
            }
        }

        return wuf.count();
    }

    private class WUF {
        private int[] parent;
        private int[] size;
        private int count;

        public WUF(int n) {
            parent = new int[n];
            size = new int[n];
            count = n;
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

        public void union(int p, int q) {
            int rootP = find(p);
            int rootQ = find(q);

            if (rootP == rootQ)
                return;

            if (size[rootP] < size[rootQ]) {
                parent[rootP] = rootQ;
                size[rootQ] += size[rootP];
            } else {
                parent[rootQ] = rootP;
                size[rootP] += size[rootQ];
            }

            count--;
        }

        public int count() {
            return count;
        }
    }
}