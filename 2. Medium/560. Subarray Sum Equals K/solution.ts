function subarraySum(nums: number[], k: number): number {
  let dp = new Array(nums.length + 1).fill(0),
      res = 0;

  for (let i = 1; i < dp.length; ++i)
    dp[i] = dp[i - 1] + nums[i - 1];

  for (let i = 1; i < dp.length; ++i)
    for (let j = 0; j < i; ++j)
        if (dp[i] - dp[j] == k) res++;

  return res;
}
