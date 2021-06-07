/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return getRoot(0, nums.length - 1);

  function getRoot(lo, hi) {
    if (lo > hi) return null;

    let mid = (lo + hi) >> 1;
    let root = new TreeNode(nums[mid]);

    root.left = getRoot(lo, mid - 1);
    root.right = getRoot(mid + 1, hi);

    return root;
  }
};
