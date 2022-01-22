/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root == null) return true;
  return (
    validateL(root.left, root.val) &&
    validateR(root.right, root.val) &&
    isValidBST(root.left) &&
    isValidBST(root.right)
  );

  function validateL(node, val) {
    if (node == null) return true;
    return node.val < val && validateL(node.left, val) && validateL(node.right, val);
  }

  function validateR(node, val) {
    if (node == null) return true;
    return node.val > val && validateR(node.left, val) && validateR(node.right, val);
  }
};
