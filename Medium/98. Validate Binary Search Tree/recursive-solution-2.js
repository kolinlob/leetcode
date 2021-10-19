/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  if (root == null) return true;
  return validate(root);

  function validate(node, min, max) {
    if (node == null) return true;
    if (min != undefined && node.val <= min) return false;
    if (max != undefined && node.val >= max) return false;

    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  }
};
