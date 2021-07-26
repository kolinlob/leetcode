/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return bst(0, nums.length - 1);

  function bst(lo, hi) {
    if (lo > hi) return null;
    const mid = (lo + hi) >> 1;
    return new TreeNode(nums[mid], bst(lo, mid - 1), bst(mid + 1, hi));
  }
};
