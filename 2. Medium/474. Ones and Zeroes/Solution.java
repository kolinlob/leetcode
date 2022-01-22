class Solution {
    public int findMaxForm(String[] strs, int m, int n) {
        int len = strs.length;
        int[][][] dp = new int[len + 1][m + 1][n + 1];

        for (int i = 0; i < len + 1; i++) {
            int[] z = new int[2];
            if (i > 0) {
                for (char ch : strs[i - 1].toCharArray()) {
                    if (ch == '0')
                        z[0]++;
                    else
                        z[1]++;
                }
            }

            for (int m1 = 0; m1 < m + 1; m1++) {
                for (int n1 = 0; n1 < n + 1; n1++) {
                    if (i == 0)
                        dp[i][m1][n1] = 0;
                    else if (m1 >= z[0] && n1 >= z[1])
                        dp[i][m1][n1] = Math.max(dp[i - 1][m1][n1], dp[i - 1][m1 - z[0]][n1 - z[1]] + 1);
                    else
                        dp[i][m1][n1] = dp[i - 1][m1][n1];
                }
            }
        }

        return dp[len][m][n];
    }
}