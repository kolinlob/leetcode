/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const res = [];
  traverse(root);
  return res[k - 1];

  function traverse(node) {
    if (!node) return;
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
  }
};
