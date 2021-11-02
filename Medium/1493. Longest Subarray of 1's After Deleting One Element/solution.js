/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let ones = 0, maxLen = 0;

  for (let i = 0, j = 0; i < nums.length; i++) {
    ones += nums[i];

    if (i - j > ones)
        ones -= nums[j++];

    maxLen = Math.max(maxLen, i - j);
  }

  return maxLen;
};
