var combinationSum4 = function (nums, target) {
    const dp = new Array(target + 1);
    dp[0] = 1;

    const combinations = (nums, target, dp) => {
        if (dp[target] != null)
            return dp[target];

        let res = 0;
        for (let i = 0; i < nums.length; i++) {
            if (target >= nums[i]) {
                res += combinations(nums, target - nums[i], dp);
            }
        }

        dp[target] = res;
        return res;
    }

    return combinations(nums, target, dp);
};