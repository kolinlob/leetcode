/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root == null) return true;
  let inorder = [];
  traverse(root);
  return inorder.every((e, i, arr) => i == 0 || e > arr[i - 1]);

  function traverse(node) {
    if (node == null) return;
    traverse(node.left);
    inorder.push(node.val);
    traverse(node.right);
  }
};
