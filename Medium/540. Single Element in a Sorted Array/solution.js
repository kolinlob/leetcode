/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let lo = 0,
    hi = nums.length - 1;

  while (lo < hi) {
    let mid = (lo + hi) >> 1;
    if (lo < mid && mid < hi && nums[mid - 1] < nums[mid] && nums[mid] < nums[mid + 1])
      return nums[mid];

    if (mid % 2 == 0) {
      if (nums[mid] == nums[mid + 1]) lo = mid + 1;
      else hi = mid - 1;
    } else if (nums[mid] == nums[mid + 1]) hi = mid - 1;
    else lo = mid + 1;
  }

  return nums[lo];
};
