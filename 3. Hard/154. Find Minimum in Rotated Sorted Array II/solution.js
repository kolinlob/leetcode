/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let lo = 0, hi = nums.length - 1;
  if (nums[lo] < nums[hi]) return nums[lo];

  while (lo < hi) {
    const mid = (lo + hi) >> 1;

    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid - 1] > nums[mid]) return nums[mid];

    if (
      nums[mid] > nums[0] ||
      nums[mid] > nums[hi] ||
      (nums[mid] == nums[lo] && nums[mid] == findMin(nums.slice(lo, mid + 1)))
    )    lo = mid + 1;
    else hi = mid - 1;
  }

  return nums[lo];
};
