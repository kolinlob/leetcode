/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let postorder = [];
  traverse(root);
  return postorder;

  function traverse(node) {
    if (node == null) return;

    traverse(node.left);
    traverse(node.right);
    postorder.push(node.val);
  }
};
