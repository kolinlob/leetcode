/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function (nums) {
  let max = 0, sum = 0, left = 0, right = 0;
  let set = new Set();

  while (left < nums.length && right < nums.length) {
    if (set.has(nums[right])) {
      sum -= nums[left];
      set.delete(nums[left++]);
    } else {
      sum += nums[right];
      max = Math.max(max, sum);
      set.add(nums[right++]);
    }
  }

  return max;
};
