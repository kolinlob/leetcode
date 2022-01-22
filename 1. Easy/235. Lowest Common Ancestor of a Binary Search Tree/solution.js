/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root == p || root == q) return root;

  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);

  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);

  return root;
};
