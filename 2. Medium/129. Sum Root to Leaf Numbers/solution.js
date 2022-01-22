/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  return traverse(root, 0);

  function traverse(node, num) {
    if (node == null) return 0;

    const next = 10 * num + node.val;

    if (node.left || node.right)
      return traverse(node.left, next) + traverse(node.right, next);

    return next;
  }
};
