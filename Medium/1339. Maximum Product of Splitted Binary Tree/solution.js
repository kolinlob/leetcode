/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function (root) {
  const total = sum(root);
  let maxProd = root.val;
  maximize(root);
  return maxProd % 1_000_000_007;

  function maximize(node) {
    if (!node) return 0;
    const subT = maximize(node.left) + maximize(node.right) + node.val;
    maxProd = Math.max((total - subT) * subT, maxProd);
    return subT;
  }

  function sum(node) {
    if (!node) return 0;
    return node.val + sum(node.left) + sum(node.right);
  }
};
