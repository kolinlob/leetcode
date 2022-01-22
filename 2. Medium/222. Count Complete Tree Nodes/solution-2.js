/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  let h = height(root);

  return h < 0
    ? 0
    : height(root.right) == h - 1
        ? (1 << h) + countNodes(root.right)
        : (1 << (h - 1)) + countNodes(root.left);

  function height(node) {
    return node == null ? -1 : 1 + height(node.left);
  }
};
