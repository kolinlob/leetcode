/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let longer = nums1;
  let shorter = nums2;

  if (nums2.length > nums1.length) {
    longer = nums2;
    shorter = nums1;
  }

  shorter.sort((a, b) => a - b);

  let res = new Set();
  for (let n of longer)
    if (bs(0, shorter.length - 1, n))
        res.add(n);

  return [...res];

  function bs(lo, hi, tar) {
    while (lo <= hi) {
      let mid = (lo + hi) >> 1;
      if (tar == shorter[mid]) return true;
      if (tar < shorter[mid]) hi = mid - 1;
      else lo = mid + 1;
    }
    return false;
  }
};
