/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let preorder = [];
  traverse(root);
  return preorder;

  function traverse(node) {
    if (node == null) return;
    preorder.push(node.val);
    traverse(node.left);
    traverse(node.right);
  }
};
