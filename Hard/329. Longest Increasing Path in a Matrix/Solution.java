class Solution {
    public int longestIncreasingPath(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length, max = 1;
        int[][] dp = new int[m][n];

        for (int row = 0; row < m; row++) {
            for (int col = 0; col < n; col++) {
                int len = dfs(row, col, matrix, m, n, dp);
                max = Math.max(max, len);
            }
        }

        return max;
    }

    private int dfs(int row, int col, int[][] mat, int m, int n, int[][] dp) {
        if (dp[row][col] != 0)
            return dp[row][col];

        int[][] dir = new int[][] { { 0, -1 }, { 0, 1 }, { -1, 0 }, { 1, 0 } };
        int max = 1;

        for (int[] d : dir) {
            int x = row + d[0], y = col + d[1];
            if (x < 0 || y < 0 || x >= m || y >= n || mat[x][y] <= mat[row][col])
                continue;

            int len = 1 + dfs(x, y, mat, m, n, dp);
            max = Math.max(max, len);
        }
        dp[row][col] = max;
        return max;
    }
}