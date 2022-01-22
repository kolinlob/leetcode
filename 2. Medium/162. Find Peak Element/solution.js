/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let lo = 0, hi = nums.length - 1;

  while (lo < hi) {
    let mid = (lo + hi) >> 1;
    if (nums[mid] > nums[mid + 1]) hi = mid;
    else lo = mid + 1;
  }

  return lo;
};
