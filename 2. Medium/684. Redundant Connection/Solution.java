class Solution {
    public int[] findRedundantConnection(int[][] edges) {
        WUF wuf = new WUF(edges.length + 1);

        for (int[] edge : edges) {
            if (wuf.connected(edge[0], edge[1]))
                return edge;

            wuf.union(edge[0], edge[1]);
        }

        return null;
    }

    private class WUF {
        int[] parent;
        int[] size;

        public WUF(int n) {
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
                size[rootQ] = rootP;
            }
        }
    }
}