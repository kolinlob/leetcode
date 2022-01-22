class Solution {
    public int findTargetSumWays(int[] nums, int S) {
        return dfs(nums, S, 0, 0);
    }

    private int dfs(int[] nums, int S, int i, int sum) {
        if (i == nums.length) {
            if (sum == S)
                return 1;

            return 0;
        }

        return dfs(nums, S, i + 1, sum + nums[i]) + dfs(nums, S, i + 1, sum - nums[i]);
    }
}