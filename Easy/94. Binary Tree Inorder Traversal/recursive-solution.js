/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let inorder = [];
  traverse(root);
  return inorder;

  function traverse(node) {
    if (node == null) return;

    traverse(node.left);
    inorder.push(node.val);
    traverse(node.right);
  }
};
