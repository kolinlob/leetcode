class Solution {
    public int combinationSum4(int[] nums, int target) {
        Integer[] dp = new Integer[target + 1];
        dp[0] = 1;

        return combinations(nums, target, dp);
    }

    private int combinations(int[] nums, int target, Integer[] dp) {
        if (dp[target] != null)
            return dp[target];

        int res = 0;
        for (int i = 0; i < nums.length; i++) {
            if (target >= nums[i]) {
                res += combinations(nums, target - nums[i], dp);
            }
        }

        dp[target] = res;
        return res;
    }
}