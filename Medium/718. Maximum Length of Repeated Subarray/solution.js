/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = new Array(nums1.length)
    .fill(null)
    .map((x) => new Array(nums2.length).fill(0));

  let max = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[i].length; j++) {
      if (nums1[i] == nums2[j]) {
        dp[i][j] = 1;

        if (i > 0 && j > 0) {
          dp[i][j] += dp[i - 1][j - 1];
          max = dp[i][j] > max ? dp[i][j] : max;
        }
      }
    }
  }

  return max;
};
