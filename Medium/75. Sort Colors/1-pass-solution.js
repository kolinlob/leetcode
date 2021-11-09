/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let lo = 0, cur = 0, hi = nums.length - 1;
  while (cur <= hi) {
    if (nums[cur] == 0) {
      [nums[lo], nums[cur]] = [nums[cur], nums[lo]];
      lo++;
      cur++;
    } else if (nums[cur] == 1) cur++;
    else {
      [nums[cur], nums[hi]] = [nums[hi], nums[cur]];
      hi--;
    }
  }
};
