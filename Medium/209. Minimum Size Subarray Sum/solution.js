/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let len = Infinity, sum = 0, left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      len = Math.min(len, right - left + 1);
      sum -= nums[left++];
    }
  }

  return len == Infinity ? 0 : len;
};
