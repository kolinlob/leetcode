/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  return dfs(root, root.val);

  function dfs(node, max) {
    return node
      ? (node.val >= max) +
          dfs(node.left, Math.max(max, node.val)) +
          dfs(node.right, Math.max(max, node.val))
      : 0;
  }
};
