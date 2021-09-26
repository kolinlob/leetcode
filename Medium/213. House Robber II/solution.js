/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) return dpRob(nums);

  return Math.max(dpRob(nums.slice(1)), dpRob(nums.slice(0, nums.length - 1)));

  function dpRob(nms) {
    const dp = new Array(nms + 1);
    dp[0] = 0;
    dp[1] = nms[0];

    for (let i = 1; i < nms.length; i++)
      dp[i + 1] = Math.max(nms[i] + dp[i - 1], dp[i]);

    return dp[nms.length];
  }
};
