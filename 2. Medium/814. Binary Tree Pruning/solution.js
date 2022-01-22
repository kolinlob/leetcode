/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  return keep(root) ? root : null;

  function keep(node) {
    if (!node) return false;

    const left = keep(node.left);
    if (!left) node.left = null;

    const right = keep(node.right);
    if (!right) node.right = null;

    return node.val == "1" || left || right;
  }
};
