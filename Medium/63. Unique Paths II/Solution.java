class Solution {
    public int uniquePathsWithObstacles(int[][] grid) {
        if (grid[0][0] == 1)
            return 0;

        int[][] dp = new int[grid.length][grid[0].length];
        dp[0][0] = 1;

        for (int row = 0; row < grid.length; row++) {
            for (int col = 0; col < grid[0].length; col++) {
                if (grid[row][col] == 0) {
                    if (row > 0 && grid[row - 1][col] == 0)
                        dp[row][col] += dp[row - 1][col];
                    if (col > 0 && grid[row][col - 1] == 0)
                        dp[row][col] += dp[row][col - 1];
                }
            }
        }

        return dp[grid.length - 1][grid[0].length - 1];
    }
}