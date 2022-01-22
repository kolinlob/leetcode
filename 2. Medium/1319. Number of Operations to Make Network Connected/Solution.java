class Solution {
    public int makeConnected(int n, int[][] connections) {
        if (connections.length < n - 1)
            return -1;

        DSU uf = new DSU(n);
        for (int i = 0; i < connections.length; i++)
            uf.union(connections[i][0], connections[i][1]);

        return uf.count() - 1;
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
            while (p != parent[p]) {
                parent[p] = parent[parent[p]];
                p = parent[parent[p]];
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