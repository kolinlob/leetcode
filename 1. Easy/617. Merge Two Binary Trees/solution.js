/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 == null && root2 == null) return null;

  let node = new TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));

  node.left = mergeTrees(root1?.left, root2?.left);
  node.right = mergeTrees(root1?.right, root2?.right);

  return node;
};
