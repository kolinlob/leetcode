class Solution {
    public int coinChange(int[] coins, int amount) {
        double[] dp = new double[amount + 1];
        Arrays.fill(dp, Double.POSITIVE_INFINITY);
        dp[0] = 0;

        for (int coin : coins) {
            for (int i = coin; i < dp.length; i++)
                if (i - coin >= 0 && dp[i - coin] + 1 < dp[i])
                    dp[i] = dp[i - coin] + 1;
        }

        return dp[amount] == Double.POSITIVE_INFINITY ? -1 : (int) dp[amount];
    }
}