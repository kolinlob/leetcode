class Solution {
    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        DSU uf = new DSU(n);

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++)
                if (isConnected[i][j] == 1)
                    uf.union(i, j);
        }

        return uf.count();
    }

    private class DSU {
        int[] parent;
        int[] size;
        int count;

        public DSU(int n) {
            parent = new int[n];
            size = new int[n];
            count = n;

            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }

        public int find(int p) {
            int root = p;

            while (root != parent[root])
                root = parent[root];

            while (p != root) {
                int tmp = parent[p];
                parent[p] = root;
                p = tmp;
            }

            return p;
        }

        public int count() {
            return count;
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
    }
}