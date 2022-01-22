/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root == null) return 0;
  let leftLeave = root.left && !root.left.left && !root.left.right ? root.left.val : 0;
  let left = sumOfLeftLeaves(root.left);
  let right = sumOfLeftLeaves(root.right);

  return leftLeave + left + right;
};
