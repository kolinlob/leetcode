/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  let tilt = 0;
  sum(root);
  return tilt;

  function sum(node) {
    if (node == null) return 0;

    let left = sum(node.left);
    let right = sum(node.right);

    tilt += Math.abs(right - left);

    return node.val + left + right;
  }
};
