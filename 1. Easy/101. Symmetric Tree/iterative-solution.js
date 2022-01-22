/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let queue = [root, root];

  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();

    if (left == null && right == null) continue;
    if (left == null || right == null || left.val != right.val) return false;

    queue.push(left.left, right.right, left.right, right.left);
  }

  return true;
};
