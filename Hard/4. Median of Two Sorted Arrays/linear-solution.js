/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let joint = [];
  while (nums1.length && nums2.length)
    joint.push(nums1[0] < nums2[0] ? nums1.shift() : nums2.shift());

  joint = [...joint, ...(nums1.length > 0 ? nums1 : nums2)];

  return joint.length % 2 == 1
    ? joint[(joint.length / 2) >> 0]
    : (joint[joint.length / 2] + joint[joint.length / 2 - 1]) / 2;
};
