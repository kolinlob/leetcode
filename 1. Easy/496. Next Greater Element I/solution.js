/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  return nums1.map((e) => {
    let i = nums2.indexOf(e);
    if (i == nums2.length - 1)
        return -1;

    for (; i < nums2.length; i++)
        if (nums2[i] > e)
            return nums2[i];

    return -1;
  });
};
