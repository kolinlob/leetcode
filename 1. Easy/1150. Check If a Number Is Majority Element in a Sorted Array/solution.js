/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
  let start = bs(target);
  let end = start + (nums.length / 2) >> 0;

  return nums[end] == target;

  function bs(tar) {
    let lo = 0, hi = nums.length - 1;

    while (lo <= hi) {
      let mid = (lo + hi) >> 1;
      if (nums[mid] < tar) lo = mid + 1;
      else hi = mid - 1;
    }

    return lo;
  }
};
