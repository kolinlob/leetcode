class Solution {
    public int countSubstrings(String s) {
        int n = s.length();
        boolean[][] dp = new boolean[n][n];
        int count = n;

        for (int i = 0; i < n; i++)
            dp[i][i] = true;

        for (int i = 0; i < n - 1; i++) {
            dp[i][i + 1] = s.charAt(i) == s.charAt(i + 1);
            count += dp[i][i + 1] ? 1 : 0;
        }

        for (int len = 3; len <= n; len++) {
            for (int i = 0, j = len + i - 1; j < n; i++, j++) {
                dp[i][j] = dp[i + 1][j - 1] && s.charAt(i) == s.charAt(j);
                count += dp[i][j] ? 1 : 0;
            }
        }

        return count;
    }
}