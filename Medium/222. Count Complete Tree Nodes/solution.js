/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (root == null) return 0;

  let h = 0, node = root;
  while (node) {
    node = node.left;
    h++;
  }

  if (h == 1) return 1;

  let limit = h - 1;
  return (2 ** h) - 1 - missing(root, 1);

  function missing(node, depth) {
    if (node == null) return 0;
    if (depth >= limit) {
      return !!(node.left == null) + !!(node.right == null);
    }

    return missing(node.left, depth + 1) + missing(node.right, depth + 1);
  }
};
