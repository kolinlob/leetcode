class Solution {
    public int fib(int n) {
        if (n < 2)
            return n;

        Integer[] dp = new Integer[n + 1];
        dp[0] = 0;
        dp[1] = 1;

        return memo(n, dp);
    }

    int memo(int n, Integer[] dp) {
        if (dp[n] == null)
            dp[n] = memo(n - 1, dp) + memo(n - 2, dp);

        return dp[n];
    }
}