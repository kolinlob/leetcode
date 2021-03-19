class Solution {
    public int[] findRedundantDirectedConnection(int[][] edges) {
        Map<Integer, Integer> V = new HashMap();
        List<int[]> candidates = new ArrayList();

        for (int[] edge : edges) {
            if (V.containsKey(edge[1])) {
                candidates.add(new int[] { V.get(edge[1]), edge[1] });
                candidates.add(edge);
            } else
                V.put(edge[1], edge[0]);
        }

        if (candidates.isEmpty()) {
            boolean[] visited = new boolean[edges.length];

            for (int[] edge : edges) {
                visited[edge[0] - 1] = true;

                if (visited[edge[1] - 1])
                    return edge;

                visited[edge[1] - 1] = true;
            }
        } else {
            DSU uf = new DSU(edges.length);
            for (int[] edge : edges) {
                if (Arrays.equals(edge, candidates.get(1)))
                    continue;
                uf.union(edge[0] - 1, edge[1] - 1);
            }

            if (uf.count() == 1)
                return candidates.get(1);
        }

        return candidates.get(0);
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
                p = parent[p];
            }
            return p;
        }

        public int count() {
            return count;
        }

        public void union(int p, int q) {
            int rp = find(p);
            int rq = find(q);

            if (rp == rq)
                return;

            if (size[rp] > size[rq]) {
                parent[rq] = rp;
                size[rp] += size[rq];
            } else {
                parent[rp] = rq;
                size[rq] += size[rp];
            }

            count--;
        }
    }
}