class Solution {
    public int shortestPathBinaryMatrix(int[][] grid) {
        int n = grid.length - 1;
        if (grid[0][0] == 1 || grid[n][n] == 1)
            return -1;

        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] { 0, 0 });
        grid[0][0] = 1;

        while (!queue.isEmpty()) {
            int[] cur = queue.remove();
            int a = cur[0], b = cur[1];
            if (a == n && b == n)
                return grid[n][n];

            for (int i = a - 1; i <= a + 1; i++)
                for (int j = b - 1; j <= b + 1; j++) {
                    if (i < 0 || i > n || j < 0 || j > n)
                        continue;
                    if (grid[i][j] > 0)
                        continue;
                    grid[i][j] = grid[a][b] + 1;
                    queue.add(new int[] { i, j });
                }
        }

        return -1;
    }
}