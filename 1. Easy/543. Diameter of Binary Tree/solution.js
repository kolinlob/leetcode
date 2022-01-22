/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  getDepth(root);
  return diameter;

  function getDepth(node) {
    if (!node) return 0;

    let left = getDepth(node.left);
    let right = getDepth(node.right);
    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  }
};
