/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  let res = [];

  for (let num of nums2) {
    let lo = 0,
      hi = nums1.length - 1;

    while (lo <= hi) {
      let mid = (lo + hi) >> 1;
      if (num == nums1[mid]) {
        res.push(nums1.splice(mid, 1));
        break;
      }

      if (num > nums1[mid]) lo = mid + 1;
      else hi = mid - 1;
    }
  }

  return res;
};
