class Solution {
    public int numberOfArithmeticSlices(int[] A) {
        int[] dp = new int[A.length];
        int count = 0;

        for (int i = 2; i < A.length; i++)
            if (A[i - 2] - A[i - 1] == A[i - 1] - A[i]) {
                dp[i] = 1 + dp[i - 1];
                count += dp[i];
            }

        return count;
    }
}