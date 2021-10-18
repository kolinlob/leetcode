/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  if (root == null) return new TreeNode(val);

  if (val > root.val)
    root.right = insertIntoBST(root.right, val);
  else
    root.left = insertIntoBST(root.left, val);

  return root;
};
