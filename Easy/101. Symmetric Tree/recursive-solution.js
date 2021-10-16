/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return check(root.left, root.right);

  function check(left, right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;

    return (
      left.val == right.val &&
      check(left.left, right.right) &&
      check(left.right, right.left)
    );
  }
};
