/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0, hi = nums.length - 1;

  while (lo <= hi) {
    const mid = (lo + hi) >> 1;

    const piv =
      nums[mid] < nums[0] == target < nums[0]
        ? nums[mid]
        : target < nums[0]
            ? -Infinity
            : Infinity;

    if (piv == target) return mid;
    if (target > piv) lo = mid + 1;
    else hi = mid - 1;
  }

  return -1;
};
