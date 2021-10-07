/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;

  while (k >= 0) {
    if (i >= 0 && j >= 0)
      if (nums2[j] > nums1[i]) nums1[k--] = nums2[j--];
      else nums1[k--] = nums1[i--];
    else if (i < 0) nums1[k--] = nums2[j--];
    else nums1[k--] = nums1[i--];
  }
};
