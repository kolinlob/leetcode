class Solution {
    public List<List<Integer>> pacificAtlantic(int[][] matrix) {
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0)
            return Collections.emptyList();

        Queue<int[]> queue = new LinkedList();

        for (int row = 0; row < matrix.length; row++) {}
            queue.offer(new int[] { row, 0 });

        for (int col = 0; col < matrix[0].length; col++)
            queue.offer(new int[] { 0, col });

        Set<List<Integer>> pacifics = bfs(queue, matrix);

        for (int row = 0; row < matrix.length; row++)
            queue.offer(new int[] { row, matrix[0].length - 1 });

        for (int col = 0; col < matrix[0].length; col++)
            queue.offer(new int[] { matrix.length - 1, col });

        Set<List<Integer>> atlantics = bfs(queue, matrix);

        List<List<Integer>> res = new ArrayList();
        for (List<Integer> u : pacifics)
            if (atlantics.contains(u))
                res.add(u);

        return res;
    }

    private Set<List<Integer>> bfs(Queue<int[]> q, int[][] mx) {
        boolean[][] v = new boolean[mx.length][mx[0].length];
        Set<List<Integer>> set = new HashSet();

        while (!q.isEmpty()) {
            int[] u = q.poll();
            int r = u[0], c = u[1];

            if (!v[r][c]) {
                v[r][c] = true;
                set.add(Arrays.asList(r, c));

                if (r > 0 && mx[r][c] <= mx[r - 1][c] && !v[r - 1][c])
                    q.offer(new int[] { r - 1, c });

                if (r < mx.length - 1 && mx[r][c] <= mx[r + 1][c] && !v[r + 1][c])
                    q.offer(new int[] { r + 1, c });

                if (c > 0 && mx[r][c] <= mx[r][c - 1] && !v[r][c - 1])
                    q.offer(new int[] { r, c - 1 });

                if (c < mx[r].length - 1 && mx[r][c] <= mx[r][c + 1] && !v[r][c + 1])
                    q.offer(new int[] { r, c + 1 });
            }
        }

        return set;
    }
}