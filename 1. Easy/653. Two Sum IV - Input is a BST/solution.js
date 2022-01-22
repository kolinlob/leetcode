/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  return traverse(root, k);

  function traverse(node, v) {
    if (!node) return false;
    if (v - node.val != node.val && find(root, v - node.val)) return true;
    return traverse(node.left, v) || traverse(node.right, v);

    function find(node, v) {
      if (!node) return false;
      if (node.val == v) return true;
      return find(v < node.val ? node.left : node.right, v);
    }
  }
};
