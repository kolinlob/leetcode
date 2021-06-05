/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  return traverse(root, k);

  function traverse(node, k) {
    if (!node) return false;

    if (k - node.val != node.val && find(root, k - node.val)) return true;

    return traverse(node.left, k) || traverse(node.right, k);
  }

  function find(node, v) {
    if (!node) return false;

    if (node.val == v) return true;

    if (v < node.val) return find(node.left, v);

    return find(node.right, v);
  }
};
