/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  let X = depth(root, x, null);
  let Y = depth(root, y, null);

  return X && Y && X.dep == Y.dep && X.par != Y.par;

  function depth(node, v, p) {
    if (node == null) return null;
    if (node.val == v) return { dep: 0, par: p?.val };

    let left = depth(node.left, v, node);
    let right = depth(node.right, v, node);

    if (left) {
      left.dep++;
      return left;
    }

    if (right) {
      right.dep++;
      return right;
    }

    return null;
  }
};
